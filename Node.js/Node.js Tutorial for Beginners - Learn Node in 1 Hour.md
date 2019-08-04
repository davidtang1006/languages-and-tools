## [Node.js Tutorial for Beginners: Learn Node in 1 Hour](http://www.youtube.com/watch?v=TlB_eWDSMt4)

### Node Architecture

#### Runtime environment (1)

It will be great to execute JavaScript outside of a browser\
(Node is a ***runtime environment*** for executing JavaScript code)\
Before Node, we use JavaScript only to build applications and run inside of a browser

#### A browser does this:

JS Code >> JS Engine >> Machine code\
JS Engine is a compiler\
Machine code is a code that a computer can understand

#### JS Engine

Microsoft Edge uses Chakra; Firefox uses SpiderMonkey; Chrome uses v8 (JS Engine).\
Therefore, JavaScript code can behave differently in two browsers

#### Browser + runtime environment

A browser provides runtime environment\
A browser contains runtime environment, which specifies some objects and provides a basis for people to build things on it\
The runtime environment contains JavaScript engine

#### Runtime environment (2)

e.g. in browsers, we have document/window object (`document.getElementById('');`)\
The object allows us to work in an environment in which our code is running

#### History

Up to 2009, the only way to execute JavaScript code was inside of a browser\
Ryan Dahl had an idea: it will be great to execute JS outside of a browser. He took Google v8 engine (the fastest JS engine out there), and <u>**embedded**</u> it inside a C++ program:\
[Chrome [v8]] >> [Node.exe [v8]]\
Node.exe uses v8 engine

#### Other information

Node.exe is a runtime environment for JavaScript code. Similar to a browser, Node is a runtime environment for JS code.\
It contains an engine that can execute JS code. It also has certain objects that provide an environment for our JS code.\
Those objects are different from the environment objects we have in browsers, e.g. `document.getElementById('');` (we do not have document object in Node)\
We have other objects that gives us interesting capabilities:\
e.g. `fs.readFile(); // We can work with the file system`, `http.createServer(); // Listen for requests in a given port`\
Therefore, Node is a program that includes v8 JavaScript engine and some additional modules that give us capabilities not available inside browsers

#### Node is not a programming language

Do not compare it with C#, framework like ASP.NET

### How Node Works

#### Feature

Node applications are highly-scalable, data-intensive and real-time (they update quickly) because of the non-blocking/asynchronous nature of Node (by default)\
Being asynchronous is like a waiter serving different tables. The waiters do not have to wait for the chef to cook one meal before they serve another table.\
Similarly, a single thread is used to handle multiple requests

#### A counter example:

We have blocking/synchronous architecture (ASP.NET (extra work is needed for it to use asynchronous architecture))\
The waiter waits after knowing the order of one table\
Similarly, after the thread request for a resource (querying a database), the thread is "sitting" there waiting only\
It cannot be used to serve another client\
We need a new thread to serve another client\
At some point we are going to run out of threads to serve the clients, so the clients have to wait, or we need to add more hardware

#### Event Queue

When a single thread is waiting for a request to be handled, the thread serves another client. When the database prepared the result, it puts a message in what is called an event queue.\
Node is continuously monitoring the queue in the background. When it finds the data it requires is ready, it will take it out, and process it.\
Therefore, Node is ideal for I/O-intensive apps and it is able to serve more clients

Do not use Node for CPU-intensive apps (e.g. video encoding/image manipulation service). We have a lot of calculation that should be done by CPU, and few operations that touch the file system/network.\
- Since node application are single threaded, when performing calculation to serve one client, other clients have to wait

### Coding

- Install "Node.js" online
- Create a new folder in the file system
- Open the folder in a code editor (Sublime, Atom, etc.)

For example,
- Create a new JS source code file, where one can write regular code there
```javascript
function sayHello(name) {
    console.log('Hello' + name);
}
sayHello('Mosh'); // You can call the function
```
- To run app.js using Node, type `node app.js`\
(The source code is passed to Node. Node will pass it to v8 for execution.)\
Extra: In Node, we do not have `window`, which represents global scope for browsers. The variables and functions that are defined globally can be accessed via window object.

### Global Objects

For Node, we have `os`, `fs`, `events`, `http`

```javascript
// The following is global!
setTimeout();
clearTimeout();
setInterval();
clearInterval();
```
In Node, it is not window object, but global object
i.e. we use `global.console.log()`, `global.setTimeout()`, etc., where `global.` is optional

We have global object extension
```javascript
var message = ''; // "message" is not added to global object. This is only scoped to this file, app.js.
console.log(global.message); // "undefined"
```

### Modules

In the client-side JS that we run inside of browser, when we declare a variable or a function, that is added to the global scope\
When we define functions in the global scope (if possible), there may be name conflicts\
Every file in a Node application **is considered a module**. Variables and functions defined in the file/module are scoped in that file/module.\
If one module wants to use other module's function/variables, one needs to export and import the corresponding function/variables\
Every Node application has a main module

Check out the module object by typing: `console.log(module);`\
The returned string:
```
Module {
    id: '.',
    exports: {},
    parent: null,
    filename: 'C:\\Users\\David Tang\\Node\\FirstApp\\app.js',
    loaded: false,
    children: [],
    paths:
    ['C:\\Users\\David Tang\\Node\\FirstApp\\node_modules',
    'C:\\Users\\David Tang\\Node\\node_modules',
    'C:\\Users\\David Tang\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules']
}
```

### Creating a Module

(There are websites out there provide logging as a service. They give us a URL and we can send an HTTP request to that URL to log message in the cloud.)
```javascript
/* logger.js */
var url = 'http://mylogger.io/log';
function log(message) {
    // Send an HTTP request
    console.log(message);
}
module.exports.log = log; // This exports the function
module.exports.url = url;
// module.exports.endPoint = url; // This changes the name
```

### Loading a Module

To load a module, we use the function `require`\
e.g. `require('./logger.js')` (or `require('./logger')`)\
`require('./logger.js')` returns the object that is exported from the module (in this case, it is a function)

(1)
```javascript
var logger = require('./logger');
console.log(logger); // { log (a single object called log): [Function: log] (the object is a function) }
```
(2)
```javascript
logger.log('message'); // This passes a string to the function
```

After changing `module.exports.log = log;` to `module.exports = log;`, logger in (1) is now a function, (2) can be rewritten as `logger('message')`

```javascript
const logger = require('./logger');
logger = 1; // By using "const logger", this is prevented
// One can install JSHint to pinpoint this error at compile time
```

### Module Wrapper Function

Node wraps the code inside of a function:
```javascript
function(exports, require, module, __filename, __dirname) {
    // __filename is the name of the result, e.g. .../.../.../logger.js
    // The rest of teh code typed in the text editor lies here
}
```
This is an "immediately invoked function expression", or "iif"\
We can actually write `exports.log = log;` instead of `module.exports.log = log;`.\
We cannot write `exports = log;` because `exports` <u>**is a reference to `module.exports`**</u> and we cannot change the reference

### Path Module

**In the documentation webpage**, we can see console, which is not a module (but an object), and
- buffer (will be learnt in the future)
- file system (to work with files)
- HTTP (we can create web server that listen for HTTP requests)
- os (to work with the operating system)
- path (gives us some utility function for us to work with path)
- process (gives us the current info about the current process)
- query string (useful for building HTTP (Hyper Text Transfer Protocol 超文本傳輸協定) services)
- stream (allow us to work with stream of data)

We have `path.parse` method\
e.g.
```javascript
const path = require('path');
// The require function know that this is a built-in module. If not, it will look for the existing file.
var pathObj = path.parse(__filename);
console.log(pathObj); // This is a handy technique
/* The result:
{
    root: '/',
    dir: '.../.../FirstApp',
    base: 'app.js',
    ext: '.js',
    name: 'app'
}
*/
```

### OS Module

```javascript
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' + totalMemory);
// The following line is equivalent to the above line
console.log(`Total Memory: ${totalMemory}`);
// We can use template string, which is available after ES6/ES2015. No concatenation is needed.
console.log(`Total Memory: ${freeMemory}`);
```
We cannot get this information using purely JavaScript run inside of a browser, we can only work with window or document object\
Node is run outside of a browser/on the server

### File System Module

```js
const fs = require('fs');
// Almost every operation comes in two forms: blocking/asynchronous and non-blocking/synchronous
const files = fs.readdirSync('./');
console.log(files);
// The result: ['app.js', 'logger.js'] (the files in the folder)

fs.readdir('./', function(err, files) { // (1)
    // This is a callback function, the function will be called when the operation is completed
    if(err) console.log('Error:', err); // The error will be displayed on the console
    else console.log('Result:', files);
});
// The result: Result: ['app.js', 'logger.js']
/* The result after changing './' in (1) to '$': Error: [Error: ENOENT: no such file or directory,
scandir '...\\$'] {errno: -2, code: 'ENOENT', syscall: 'scandir', path: '$'}
*/
```

### Event Module

Event module is a core concept of Node, a lot of Node functionality is based on this concept. An event is a signal that indicate that something has happened in our application.

e.g. In Node, we have a class called HTTP that we can use to build a web server so we can listen to a given port and every time we receive a request on that port, HTTP class raises an event.\
Our job is to respond to that event. This involves reading that request and returning the right response.\
Several classes of Node raise different kinds of events

In event module, there is a class called EventEmitter

```javascript
const EventEmitter = require('events');
// We capitalize the first character to indicate that this is a class
// Class is a container for properties and functions (methods)

const emitter = new EventEmitter();

emitter.on('messageLogged', function() { // (1)
    console.log('Listener called');
});

emitter.emit('messageLogged');
// Making a noise, signalling an event that has happened
// We also need a listener to listen to the event, which is (1)
```

### Event Arguments

We want to raise an event and send some data about that event
```javascript
// ...
emitter.on('messageLogged', function(arg) { // (1)
    console.log('Listener called', arg);
});
emitter.emit(
    'messageLogged',
    { id: 1, url: 'http://' } // This is an object
);
```
With ES6, `function(arg)` in (1) can be written as `(arg) =>`

### Extending EventEmitter

In real world, it is rare that you will create an emitter
```javascript
/* logger.js */
const EventEmitter = require('events');
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    // All methods of EventEmitter will be in the Logger class
    log(message) { // The keyword "function" before "log" is no longer needed
        // Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); // Note the use of "this"
    }
}

module.exports = Logger;
```
Note that with `const EventEmitter = require('events');`, **we no longer need `const emitter = new EventEmitter();`**\
Note that class is a feature in ES6, which is a **syntactical sugar** for creating a constructor function.
```javascript
/* app.js */
const EventEmitter = require('events');
// const emitter = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');
```

### HTTP Module

It is one of the powerful building blocks of Node\
We can create a web server that listens for HTTP requests on a given port\
We can easily create a back-end service for our client application like a web application that we build with React/Angular/mobile applications

```javascript
/* app.js */
const http = require('http');
const server = http.createServer(); // We create a web server. It is an event emitter.
/* http.Server inherits from net.Server; net.Server is an EventEmitter.
(Thus a lot of Node core functionality is based on an emitter.) */

server.on('connection' (socket) => {
    console.log('New connection...')
});
server.listen(3000); // "3000" is the port number
console.log('Listening on port 3000...');
/* Result:
Listening on port 3000...
New connection... (After typing localhost:3000 in a location bar of a browser, this line shows up)*/
```

```javascript
/* app.js */
const http = request('http');
const server = http.createServer((req, res) => { // "req" = request, "res" = response
    if (req.url === '/') {
        req.write('Hello World');
        res.end
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
/*
Result: After typing "localhost:3000" in a location bar of a browser,
the browser shows the line "Hello World".
After typing "localhost:3000/api/courses", the browser shows:
{
    1,
    2,
    3,
}
We get an array with 3 numbers.
*/
```

In real world, we are not going to use the HTTP module to build a back-end service for our application. As you add more routes, the code gets more complex. We add all of them in a linear way inside a callback function. So, instead, we use a framework called Express, which gives our application a clean structure to handle.
