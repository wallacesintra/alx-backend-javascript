# ES6 Basics

6th edition of ENCAScript.

## var, let and const

### var

* global scope or function scope
* can be reassigned
* can not be hoisted

```js
var a = 10

// User can re-declare
// variable using var
var a = 67

a = 23

console.log(a) //23
```

### let

* block scope
* can't be hoisted

```js
let a = 10

// It is not allowed
let a = 10

// It is allowed
a = 10


let a = 10
if (true) {
    let a = 9
    console.log(a) // It prints 9
}
console.log(a) // It prints 10

```

## Arrow functions

```js
const add = (a, b) => a + b;
```

## Classes

```js

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say_Hello() {
        console.log(`Hello, My name is ${this.name}`)
    }
}
```

## Modules

support for import and exporting modules.

```js
//export.js
export const name = "Wallace";

//import.js
import {name} from './export.js'

```

## template literals

```js
const name = "Wally"

const greeting = `Hello, ${name}`
```

## Destructing Assignment

```js
const [a, b] = [34, 56];

const {name, age} = {name: "Wallace", age: 24}
```

## Default parameter

```js
function greet(name = "user"){
    console.log(`Hello, ${name}`)
}
```

## Promises

```js
const promise = new Promise((resolve, reject) => {
    //asynchronous operation
}) 
```

## Let and Const

```js
let variable = 4555
const constant = 68624
```

## rest and spread

operators that allow the collection of multiple elements into an array or spreading elements from an array.

```js
function sum(...args) {
    return args.reduce((a, b) => a+b, 0):
}

function total_sum(...args) {
    total = 0;

    for (const arg of args) {
        total += arg
    }

    return total
}

const arr = [1, 3, 7]
const newArr = [...arr, 4, 5]
```
