FROM --platform=linux/amd64 httpd:latest AS floorspacejs-dev

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y libappindicator1 \
                       fonts-liberation \
                       ruby-full \
                       python3-pip \
                       software-properties-common \
                       curl \
                       wget

# Install python 2
ARG PYTHON_VERSION=2.7.5
RUN wget https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz \
  && tar --extract -f Python-$PYTHON_VERSION.tgz \
  && cd ./Python-$PYTHON_VERSION/ \
  && ./configure --enable-optimizations --prefix=/usr/local \
  && make && make install \
  && cd ../ \
  && rm -r ./Python-$PYTHON_VERSION*

RUN python --version

# Install nvm and use it to install the project's
# required Node version
ENV NODE_VERSION=10.24.1
ENV NVM_DIR /root/.nvm
WORKDIR $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH

ADD . /app
WORKDIR /app

RUN . $NVM_DIR/nvm.sh && npm install && npm run openstudio-build

# Cleanup
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

