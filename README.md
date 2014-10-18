[![NPM](https://nodei.co/npm/vz.next-tick.png?downloads=true)](https://nodei.co/npm/vz.next-tick/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# vz nextTick

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

