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
    return this.name + " meows";
  }
}

class Dog extends Animal {
  sound() {
    return this.name + " barks";
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
let dog1 = new Dog("Xolani" );
let dog2 = new Dog("Lenstwe");
let cat = new Cat("Kurtlin");



home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();
console.log("---------------------------------------");

home.adoptPet(cat);
home.makeAllSounds();
console.log("---------------------------------------");

home.adoptPet(dog2);
home.makeAllSounds();


