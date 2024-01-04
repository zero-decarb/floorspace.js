FROM httpd:2.4.58 AS floorspacejs-dev

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y npm

WORKDIR /app
COPY . /app


# Enable yarn
RUN npm install -g corepack && corepack enable
# Install and build
RUN yarn install

# Cleanup
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

