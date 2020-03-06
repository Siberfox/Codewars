'use strict';

class Dog {
  constructor(name, age = 0, male = true) {
    this.name = name;
    this.age = age;
    this.male = male;
    this.say = 'Гав!';
  }

  eat(food) {
    console.log(`${this.name} ест ${food}`);
  }

  meow() {
    console.log(`${this.name} говорит "${this.say}"`);
  }
}

const doggy = new Dog('Тэм', 5, false);

console.log(doggy);
doggy.meow();
doggy.eat('рыбу');
doggy.say = 'Прив я Тэм!';
doggy.meow();
