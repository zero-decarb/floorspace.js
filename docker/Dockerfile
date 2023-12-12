FROM --platform=linux/amd64 ubuntu:latest AS floorspacejs-dev

ENV DEBIAN_FRONTEND=noninteractive


RUN apt-get update && \
    apt-get install -y libappindicator1 \
                       fonts-liberation \
                       ruby-full \
                       python3-pip \
                       software-properties-common \
                       curl

# Install python 2
RUN add-apt-repository ppa:deadsnakes/ppa && apt-get install -y python2.7

# Something in the NPM installation wants there to be a `python` command in the PATH that
# maps to python2
RUN ln -s `which python2.7` /usr/local/bin/python

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ADD . /app
WORKDIR /app

CMD tail -f /dev/null
