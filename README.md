# react-granim-canvas

React Granim Canvas is a simple React component that provides a simple full-width Granim.js canvas element.


## Demo & Examples

Live demo: [tmporter.github.io/react-granim-canvas](http://tmporter.github.io/react-granim-canvas/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-granim-canvas is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-granim-canvas.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-granim-canvas --save
```


## Usage

```
// todo: expand on usage
```

```
var ReactGranimCanvas = require('react-granim-canvas');

<ReactGranimCanvas />
```

## Currently supported Granim.js API

For reference, [here is the full Granim.js API](https://sarcadass.github.io/granim.js/api.html).

### Options
* direction
* opacity
* isPausedWhenNotInView
* stateTransitionSpeed
* defaultStateName

### Callbacks
* onStart
* onGradientChange
* onEnd


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2017 Timothy Porter.

