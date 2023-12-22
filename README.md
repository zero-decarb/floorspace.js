# <img src="icons/favicon-32x32.png" /> FloorspaceJS

> a widget for creating 2d geometry for building energy models


## Getting Started

Read [the docs](https://nrel.github.io/floorspace.js/docs) then try out the [latest development version](https://nrel.github.io/floorspace.js/) in your browser.

## Build Setup

``` bash
# install node using nvm
$ nvm install 18
$ nvm use 18
$ npm install --global yarn

# install and update dependencies (optional)
yarn install

# install locked dependencies
yarn install --frozen-lockfile

# serve with hot reload at localhost:8080
yarn wp:dev

# build for production with minification
yarn wp:build

# build single page output for openstudio
npm run openstudio-build

# alternative if `npm run openstudio-build` does not work, build single page output for openstudio
npm run build
ruby build/build.rb

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

[Tests](https://travis-ci.org/NREL/floorspace.js) are run on each pull request. Current status: [![Build Status](https://travis-ci.org/NREL/floorspace.js.svg?branch=develop)](https://travis-ci.org/NREL/floorspace.js)

# Zero - Local development
The application can be run from a Docker container by doing the following:

```bash
# start the Docker container
cd docker
docker-compose up -d
```

Once you've done this, you can access the application at localhost:898. The embedded version (embedded in
a sample host page) is at localhost:898/embedded.html. The embeddable version itself is directly accessible
at localhost:898/embeddable_geometry_editor.html.

TODO: These Docker commands don't work right now. For now just invoke `npm run openstudio-build` and `yarn build`
      in your host, or rebuild your Docker container.
If you are using Docker, you can rebuild the application with
```bash
# Standalone version
npm run docker-build

# Embedded version
npm run docker-openstudio-build
```
