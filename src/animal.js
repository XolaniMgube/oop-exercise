"use strict";

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return "Sound";
  }

  eat() {
    return this.name + " eats";
  }
}

class Cat extends Animal {
  sound() {
    return "Cat meows";
  }
}

class Dog extends Animal {
  sound() {
    return "Dog barks";
  }
}

class Home {
  constructor() {
    this.animalArray = [];
  }

  adoptPet(pet) {
    if (this.animalArray.includes(pet)) {
      throw Error("Pet already adopted");
    }
    this.animalArray.push(pet);
  }

  makeAllSounds() {
    for (let i = 0; i < this.animalArray.length; i++) {
      console.log(this.animalArray[i].sound());
    }
  }
}

let home = new Home();
let dog1 = new Dog();
let dog2 = new Dog();
let cat = new Cat();

home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();
console.log("---------------------------------------");

home.adoptPet(cat);
home.makeAllSounds();
console.log("---------------------------------------");

home.adoptPet(dog2);
home.makeAllSounds();
