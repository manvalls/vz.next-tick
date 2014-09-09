# vz nextTick

[![NPM](https://nodei.co/npm/vz.next-tick.png?downloads=true)](https://nodei.co/npm/vz.next-tick/)

No piece of software is ever completed, feel free to contribute and be humble

## Sample usage:

```javascript

var nextTick = require('vz.next-tick'),
    id;

// (function,arguments,thisArg)
nextTick(console.log,['Hello','world'],console);
// Will be executed asap, but asynchronously

id = nextTick(console.log,['Bye','world'],console);
nextTick.clear(id); // Won't be executed

```

