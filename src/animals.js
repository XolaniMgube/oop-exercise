"use strict"

class Animal{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    sound(){
        return "Sound"
    }

    eat(){
        console.log(this.name + " eats")
    }
}


class Cat extends Animal{
    // constructor(name){
    //     super(name);
    // }
    sound(){
        console.log(this.name + " meows and is " + this.age + " years old")
    }
}

let cat1 = new Cat("Kurtlin", 23, "male")
// cat1.sound()
// cat1.eat()


class Dog extends Animal{
    sound(){
        console.log(this.name + " barks and is a " + this.gender)
    }
}

let dog1 = new Dog("Lentswe", 26, "female")
// dog1.sound()
// dog1.eat()


class Home extends Animal{
   
    adoptPet(){
        let animalArray = [];
        console.log(this.name)
        animalArray.push(cat1)
        animalArray.push(dog1)

        console.log(animalArray)
       
        
    }
    
    makeAllSounds(){   
    }


}


let home = new Home(cat1.name)
home.adoptPet()

// cat1.sound()


