# vz nextTick

[![NPM](https://nodei.co/npm/vz.next-tick.png?downloads=true)](https://nodei.co/npm/vz.next-tick/)

**Note:** This package is supposed to be used in a browser context using a tool like browserify

## Example ussage:

```javascript

var nextTick = require('vz.next-tick'),
    id;

// (function,arguments,thisArg)
nextTick(console.log,['Hello','world'],console); // Will be executed asap, but asynchronously

id = nextTick(console.log,['Bye','world'],console);
nextTick.clear(id); // Wont be executed

```

