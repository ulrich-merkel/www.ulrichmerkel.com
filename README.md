# www.ulrichmerkel.com

[![Build Status](https://travis-ci.org/ulrich-merkel/www.ulrichmerkel.com.svg?branch=master)](https://travis-ci.org/ulrich-merkel/www.ulrichmerkel.com)
[![Dependency Status](https://david-dm.org/ulrich-merkel/www.ulrichmerkel.com.svg?style=flat)](https://david-dm.org/ulrich-merkel/www.ulrichmerkel.com)
[![devDependency Status](https://david-dm.org/ulrich-merkel/www.ulrichmerkel.com/dev-status.svg?style=flat)](https://david-dm.org/ulrich-merkel/www.ulrichmerkel.com#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/github/ulrich-merkel/www.ulrichmerkel.com/badge.svg?branch=master)](https://coveralls.io/github/ulrich-merkel/www.ulrichmerkel.com?branch=master)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](www.ulrichmerkel.com)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/ulrich-merkel/www.ulrichmerkel.com)
[![node](https://img.shields.io/node/v/gh-badges.svg)](https://github.com/ulrich-merkel/www.ulrichmerkel.com)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/ulrich-merkel/www.ulrichmerkel.com)
[![Inline docs](http://inch-ci.org/github/ulrich-merkel/www.ulrichmerkel.com.svg?branch=master)](http://inch-ci.org/github/ulrich-merkel/www.ulrichmerkel.com)


## About

This is just a playground for React and all the corresponding ecosystem technologies. It features the following technologies:

### Frameworks and tools

* [React](https://github.com/facebook/react) - JavaScript library for building user interfaces
* [Redux](https://github.com/reactjs/redux) - Predictable state container for JavaScript apps
* [Reselect](https://github.com/reactjs/reselect) - Selector library for Redux
* [Babel](https://babeljs.io/) - A JavaScript compiler for
Using next generation JavaScript today
* [Webpack](https://webpack.github.io/) - A bundler for JavaScript and friends
* [Express](http://expressjs.com/de/) - Fast, unopinionated, minimalist web framework for Node.js
* [CSSNext](http://cssnext.io/) - Use tomorrow’s CSS syntax today
* [SASS](http://sass-lang.com/) - Stable and powerful professional CSS extension language
* [Travis CI](https://travis-ci.org/) - Test and Deploy with Confidence
* [Yarn](https://yarnpkg.com/) - Fast, reliable and secure dependency management

### Testing and linting

* [ESLint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX
* [Stylelint](https://github.com/stylelint/stylelint) - A mighty, modern CSS linter
* [Jest](https://facebook.github.io/jest) - Painless JavaScript testing framework
* [Flow](https://flowtype.org/) - A static type checker for JavaScript
* [Snyk](https://snyk.io/) - Continuously finds and fixes vulnerabilities in your dependencies
* [Node Security Platform](https://github.com/nodesecurity/nsp) - Helps you keep your node applications secure
* [RetireJS](https://github.com/RetireJS/retire.js) - Detecting the use of JavaScript libraries with known vulnerabilities
* [BackstopJS](https://garris.github.io/BackstopJS/) - An easy way for CSS regression tests
* [PageSpeed Insights](https://github.com/addyosmani/psi) - Google pagespeed insights with reporting

### Documentation

* [JSDoc](https://github.com/jsdoc3/jsdoc) - An API documentation generator for JavaScript
* [SassDoc](https://github.com/SassDoc/sassdoc) - A SCSS documentation system to build pretty docs


## Project Structure

```
/
|- __mocks__/ - node_modules mocks for running tests
|- application/ - All client and server JavaScript source files
|  |- client/ - Client JavaScript files
|  |- common/ - Shared JavaScript files
|  |- server/ - Server JavaScript files
|- bin/ - Node scripts used by NPM scripts
|- build/ - The target output dir for our build commands
|  |- client/ - The built client files
|  |- common/ - The built shared common files
|  |- server/ - The built server files
|- config/ - NPM script configuration files
|- doc/ - Generated documentation files
|- public/ - Public available files
|  |- font/ - Custom webfonts
|  |- img/ - Image source files
|  |- scss/ - SCSS/SASS files to be compiled to CSS
|- report/ - Generated reporting files
|- .babelrc - Babel configuration
|- .coveralls.sample.yml - Sample local coveralls io configuration file
|- .editorconfig - Editor config file
|- .coveralls.sample.yml - Sample dotenv configuration file
|- .flowconfig - Flowtype configuration file
|- .gitattributes - Github line ending configuration file
|- .gitignore - Github ignore configuration file
|- .npmrc - NPM configuration file
|- .snyk - Snyk vulnerabilities testing configuration file
|- .travis.yml - Travis CI configuration file
|- package.json - Basic NPM configuration file
|- README.md - The file you are reading now
|- yarn.lock - Yarn configuration file
```

## Basic NPM script commands

### `npm run watch`

* Start watching source files and rebuild them when changes occur.

### `npm run dev`

* Build files in development mode, which is nearly the same as production but without minification. Try to run subtasks in parallel if possible.

### `npm run build`

* Build files in production mode, minify and optimize files as much as possible. Try to run subtasks in parallel if possible.

### `npm run test`

* Executes all testing and linting tools in parallel.

### `npm run doc`

* Generate JSDoc and SassDoc files and folders.

## Some links which inspired my work

### React & Webpack

* [Plotly Academy](http://academy.plot.ly/)
* [Component Rendering Performance in React](https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc#.8qyu2qbv9)
* [Getting Started with Webpack 2](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.6eciwkv63)
* [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.5m75wyl2e)
* [Optimizing React + ES6 + Webpack Production Build](http://moduscreate.com/optimizing-react-es6-webpack-production-build/)

### Node & NPM

* [Nodejitsu](https://docs.nodejitsu.com/)
* [Node Hero - Node.js Security Tutorial](https://blog.risingstack.com/node-hero-node-js-security-tutorial/)
* [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
* [Using Promises with Express.js](http://first-time-ceo.tumblr.com/post/104273001643/using-promises-with-expressjs)
* [Unit testing express middleware](http://de.slideshare.net/morrissinger/unit-testing-express-middleware)
* [Introduction to Using NPM as a Build Tool](https://medium.com/@dabit3/introduction-to-using-npm-as-a-build-tool-b41076f488b0#.1gtcn19os)
* [Testing and deploying with ordered npm run scripts](http://blog.npmjs.org/post/127671403050/testing-and-deploying-with-ordered-npm-run-scripts)
* [npm scripting: configs and arguments... and some more tricks](http://www.marcusoft.net/2015/08/npm-scripting-configs-and-arguments.html)
* [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
* [The Ultimate Guide to Configuring NPM](http://stackabuse.com/the-ultimate-guide-to-configuring-npm/)
* [5 steps to making a Node.js frontend app 10x faster](https://engineering.gosquared.com/making-dashboard-faster)
* [NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc#.ay5ro7jpv)

### Babel

* [Clearing up the Babel 6 Ecosystem](https://medium.com/@jcse/clearing-up-the-babel-6-ecosystem-c7678a314bf3#.dwkqhkv55)
* [Babel Handbook](https://github.com/thejameskyle/babel-handbook)

### Boilerplates and examples

* [Ghost](https://github.com/TryGhost/Ghost)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Retro Board](https://github.com/antoinejaussoin/retro-board)
* [Express application generator](http://expressjs.com/en/starter/generator.html)
* [Flux React Router Example](https://github.com/gaearon/flux-react-router-example/)
* [Yahoo flux-examples](https://github.com/yahoo/fluxible/tree/master/examples)
* [Phenomic website generator](https://github.com/MoOx/phenomic)
* [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
* [React Boilerplate](https://github.com/mxstbr/react-boilerplate/blob/master/README.md)
* [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate)
* [React, Universally](https://github.com/ctrlplusb/react-universally)
* [Advanced Boilerplate](https://github.com/sebastian-software/advanced-boilerplate)
* [Universal React Router](https://github.com/voronianski/universal-react-router-flux-2016)
