### Scope ([What is Node.js Exactly? - a beginner's introduction to Nodejs](https://www.youtube.com/watch?v=pU9Q6oiQNd0))

What is NodeJS?

What do you do with it:
- Utilities on your machine
- A web server (Express, Koa)

Some basics
- How modules work
- npm nodules

"I have been working on PHP for a lot of years, but I don't know what Node.js is. It seems confusing seems like it means a lot of different things."

### What is NodeJS?

NodeJS took JavaScript which is normally confined to a browser and they allow it to run on your computer. Normally JavaScript runs in the browser. It can only access your web page.

Node gives JS an environment to run on the machine. They took Google Chrome's v8 engine. Now you can access the files on your computer, which you normally can't do with JavaScript, and you can listen to network traffic on your computer. You can listen to HTTP requests your machine gets and send back a file. You can access databases directly. Basically, anything you could do with PHP or Ruby on Rails can now do with JavaScript in NodeJS. There are two categories of what people are doing with node: people building utilities on the machine, which is like utilities for your day in day out (日復一日) development, that would be Gulp, Grunt, Yeoman, things you will concatenate (聯繫一起) and build JS file with. It will do live reload or whenever you save SAS file it will automatically convert to a CSS file. If you see a job description that says you need to know front-end NodeJS, they are probably referring to this kind of NodeJS. If you see a job description that says NodeJS engineer/NodeJS developer, they are probably referring to the other use case, which is building a web server or a web application with Node instead of using Ruby on Rails/PHP/Python.

We can use Express framework for NodeJS or Koa framework for NodeJS.

### What do you do with it

Type "node -v" in a console to check the version of NodeJS

Type "node" in the console and you can activate Node console:
- type "var a = 1" returns "undefined"
- type "a" returns "1", the value of "a"

One can also do this in a browser, e.g. do the same thing (use "window.a" instead of "a") in the console tab in DevTools of Chrome. NodeJS does not have a window object nor a document object, which is the HTML document. Node is not tied to an HTML document but a process.
- Try to type "process" in the Node console
- You can also run Node module. Try to type "node module1" in the console.

### How modules work

Modules involve loading one file into another. If you have used require function, you already get the concept.

```javascript
/* module1.js */
var m2 = require('./module2');
m2();

/* module2.js */
var a = 1;

// Things one can do:
/* module.exports.a = a; // OR, exports.a = a;
module.exports.b = 2; */

module.exports = function() {
    console.log('module 2!');
};
```

### npm modules

npm = node package manager, which is built into Node\
NPM allows you to download and manage packages\
Type "npm install underscore" in a right folder (it is a popular module)\
(Type "npm ls -g -depth=0" to list installed global packages)

```javascript
/* module1.js */
var _ = require('underscore');
// Node will look into the "node_modules" file to see if the module is installed

console.log(_); // The details of the object are shown
```

(An "advanced" way to manage packages)
- (You want to save the dependencies)
- Type "npm init". You will create a file named "package.json".

```json
/* package.json */
// This is an example
{
    "name": "whatisnode",
    "version": "0.0.0",
    "description": "",
    "main": "module1.js",
    "dependencies": {
        "underscore": "^1.7.0"
    },
    "devDependencies": {},
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
}
```
- "npm install backbone" does not change "package.json". Use "npm install backbone -S" instead. "S" stands for "save"
- After typing "npm install backbone -S", the object's property
"dependencies": { "underscore": "^1.7.0" } will become
"dependencies": { "backbone": "^1.1.2", "underscore": "^1.7.0" }
- Now even after one deleting the "node_modules" folder, by entering "npm install", you can get all the modules needed

There are many dependencies that people are building all the time that allow you to do cool things like accessing web services or logging in to Google with Google email address
