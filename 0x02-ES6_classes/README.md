# Classes

```js
class className {
    constructor (attribute1, attribute2){
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
    }

    method(){
        console.log(`attributes:${this.attribute1}, ${this.attribute2}`)
    }
}

const obj1 = className(attr1, attr2);
obj1.method();
```

## Static methods

methods that can be called by the class itself and not its instances

useful for utility functions

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.make} ${this.model} engine started!`);
  }

  static compareCars(car1, car2) {
    return car1.year > car2.year ? car1 : car2;
  }
}

const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2018);

const newerCar = Car.compareCars(car1, car2);
console.log(`${newerCar.make} ${newerCar.model} is newer.`);

```

## Inheritance

use `extends` keyword

```js
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super('Car');
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.make} ${this.model} engine started!`);
  }
}

const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.move();
myCar.startEngine();

```

## Metaprogramming

Metaprogramming allows you to manipulate code as data.

**symbols** are unique and immutable data types that can be used as property keys.

```js
const uniqueKey = Symbol('uniqueKey');

class MyClass {
  constructor(name) {
    this.name = name;
    this[uniqueKey] = 'hidden value';
  }

  getUniqueKey() {
    return this[uniqueKey];
  }
}

const obj = new MyClass('Example');
console.log(obj.getUniqueKey()); // 'hidden value'
console.log(Object.keys(obj)); // ['name']
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(uniqueKey)]

```
