# <img src="icons/favicon-32x32.png" /> FloorspaceJS

> a widget for creating 2d geometry for building energy models

## Zero - Local development
The application can be run from a Docker container by doing the following:

```bash
make build        # Builds the docker image
make build-embed  # Builds the embedded version
make run          # Runs and attaches
make run-detach   # Runs in detached mode
```

When the container is running, you can access:
- [http://localhost:898](http://localhost:898): Floorspace.js
- [http://localhost:898/embedded.html](http://localhost:898/embedded.html): Embedded in
a sample host page
- [http://localhost:898/embeddable_geometry_editor.html](http://localhost:898/embeddable_geometry_editor.html): Directly access the embeddable version itself.

To build the embedded versions from source without rebuilding the entire container:
```bash
make build-standalone   # Standalone version only
make build-embed        # Embedded version, as well as standalone
```


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
