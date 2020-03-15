/* eslint-disable max-classes-per-file */

'use strict';

// class Dog {
//   constructor(name, age = 0, male = true) {
//     this.name = name;
//     this.age = age;
//     this.male = male;
//     this.say = 'Гав!';
//   }

//   eat(food) {
//     console.log(`${this.name} ест ${food}`);
//   }

//   meow() {
//     console.log(`${this.name} говорит "${this.say}"`);
//   }
// }

// const doggy = new Dog('Тэм', 5, false);

// console.log(doggy);
// doggy.meow();
// doggy.eat('рыбу');
// doggy.say = 'Прив я Тэм!';
// doggy.meow();

//

class Car {
  drive() {
    return 'driving';
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
  }

  drive() {
    return this.driver.age < 18 ? 'too young to drive' : new Car().drive();
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}
let a = new CarProxy(new Driver(17));
console.log(a.drive());
console.log(a);
