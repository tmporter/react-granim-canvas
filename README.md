# react-granim-canvas

React Granim Canvas is a simple React component that provides a simple full-width Granim.js canvas element.


## Installation

The easiest way to use react-granim-canvas is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-granim-canvas.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-granim-canvas --save
```


## Usage

```js
include GranimCanvas from 'react-granim-canvas';

<GranimCanvas />
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


## License

MIT

Copyright (c) 2017 Timothy Porter.

