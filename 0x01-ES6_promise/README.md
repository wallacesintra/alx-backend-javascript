# Promise

Promises are used for asynchronous programming in JavaScript to handle operations that take time, such as fetching data from a server.

They provide a cleaner alternative to callback functions for handling asynchronous operations and chaining multiple async operations together.

A promise can be in one of three states:

* pending (initial state)
* fulfilled (operation completed successfully)
* rejected (operation failed).

```js
// Example of creating a promise
let myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

// Using the promise with then and catch
myPromise.then((message) => {
    console.log(message); // Output: Operation successful!
}).catch((error) => {
    console.error(error); // Output: Operation failed!
});

```

## Methods of Promises

* *then* : Used to handle fulfillment and rejection of a promise. It takes two optional callback arguments: onFulfilled for a successful operation and onRejected for handling errors.
* *resolve* :  not a method but a function used inside the executor function of a promise to resolve it with a value.
* *catch* : Used to handle errors (rejections) in promise chains. It is equivalent to .then(undefined, onRejected).

```js
// Using then method
myPromise.then((message) => {
    console.log(message); // Output: Operation successful!
}).catch((error) => {
    console.error(error); // Output: Operation failed!
});

// Using resolve function inside a promise
let myPromise2 = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        resolve("Resolved value");
    }, 1000);
});

myPromise2.then((value) => {
    console.log(value); // Output: Resolved value
}).catch((error) => {
    console.error(error);
});

```

## every method of the Promise object

*promise.all* :  takes an array of promises and returns a single promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first promise that rejects.

```js
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Output: [3, 42, 'foo']
}).catch((error) => {
    console.error(error);
});

```

## Throw/Try

* try and catch - handle exceptions
* throw - : Used to manually throw exceptions. When thrown within a function, it causes the function to stop executing and return the thrown value.

```js
function throwError() {
    try {
        throw new Error('Something went wrong');
    } catch (error) {
        console.error(error.message); // Output: Something went wrong
    }
}

throwError();

```

## `await`

Used in async functions to pause execution until a promise settles (either fulfilled or rejected).

It can only be used within async functions. It provides a way to write asynchronous code that looks synchronous, avoiding the callback hell.

```js
// Example of using async function and await operator
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
```
