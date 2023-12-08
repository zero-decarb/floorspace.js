FROM --platform=linux/amd64 httpd:latest AS floorspacejs-dev

RUN apt-get update && \
    apt-get install -y libappindicator1 fonts-liberation ruby-full python3-pip npm curl

# Install nvm and update to latest version of node.js
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
    . /root/.nvm/nvm.sh && \
    nvm install v20.10.0

ADD . /app
WORKDIR /app

CMD tail -f /dev/null
