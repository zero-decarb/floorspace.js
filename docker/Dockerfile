FROM --platform=linux/amd64 httpd:latest AS floorspacejs-dev

RUN apt-get update && \
    apt-get install -y libappindicator1 fonts-liberation ruby-full python3-pip npm curl

# Install nvm and update to latest version of node.js
ENV NODE_VERSION=20.10.0
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
