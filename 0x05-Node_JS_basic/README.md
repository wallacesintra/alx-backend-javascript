# Node JS

## run JavaScript using Node.js

```js
//filename.js
console.log("Hello, Its Wallace")
```

```bash
node filename.js
```

## use Node.js Modules

Node has a modular system

```js

const fs = require('fs')

fs.writeFileSync("example.txt", "first line, wallace")
```

## File Module

`fs` module is used to work with the file system.

```js
const fs = require('fs')

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data)
})
```

## use process to access command line arguments and the environment

Node.js provides a `process` - access command line arguments and environment variables

```js
// access command line arguments
console,log(process.argv)

// access environment variables
console.log(process.env.NODE_ENV)

```

## HTTP Server Using Node.js

```js
const http = require('http')

const server = http.createServer((req, res) => {
    res.status = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World \n')
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/')
})
```

create a simple HTTP server that listens on port 3000

## Small HTTP Server using Express.js

install express

```bash
npm install express
```

create a server

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello, Its Express!")
})

app.listen(3000, () => {
    console.log("Serving running on http://localhost:3000")
})
```

## Use ES6 with Node.js Using Babel-node

install babel

```bash
npm install @babel/core @babel/cli @babel/preset-env
```

create `.babelrc` file

```json
{
  "presets": ["@babel/preset-env"]
}

```

run the file

```bash
npx babel-node filename.js
```

## Use Nodemon to Develop faster

Nodemon automatically restarts your Node.js server when it detects file changes. Install it globally:

```bash
npm install -g nodemon
```

Use it to run your server

```bash
nodemon app.js
```
