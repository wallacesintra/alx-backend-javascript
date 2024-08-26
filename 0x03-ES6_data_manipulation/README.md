# Data Manipulation

## map

creating a new array be applying a function to the original function

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

## filter

create a new array that passes a given test.

```js
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

## reduce

applies a function to accumalate array into a single value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // Output: 10

```

## Typed Array

typed arrays are array-like objects for handling binary data(ie integers and floats).

```js
const buffer = new ArrayBuffer(16); // 16 bytes
const view = new Int32Array(buffer); // Typed view on the buffer
view[0] = 42;
console.log(view[0]); // Output: 42

```

## Data Structure

### Set

a collection of unique values

```js
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Output: Set { 1, 2, 3, 4 }

```

### Maps

a collection of key-value.

```js
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // Output: 1
```

### Weak map

similar to map, but the keys must be objects and are weakly held (garbage-collected if no other references exist).

```js
const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // Output: 'value'

```

### Weakset

a collection of objects, similar to sets, but the objects are weakly held.

```js
const weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
```
