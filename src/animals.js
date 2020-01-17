"use strict"

class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Sound") 
    }

    eat(){
        console.log(this.name + " eats")
    }
}


class Cat extends Animal{
    sound(){
        return this.name + " meows"
    }
}





class Dog extends Animal{
    sound(){
        return this.name + " barks"
    }
}


let cat1 = new Cat("Cat")
let dog1 = new Dog("Dog1")
let dog2 = new Dog("Dog2")


class Home{
    constructor(){
        this.animalArray = []
    }
  
    adoptPet(para){
        this.animalArray.push(para)
         //console.log(this.animalArray)
    }
    
    makeAllSounds(){ 
        

        for (let i = 0; i < this.animalArray.length; i++){

            if (this.animalArray == null){
                return " "
            }

            console.log(this.animalArray[i].sound()) 
        }

        //console.log(this.animalArray[0])

        //console.log(this.animalArray.length.sound())

        
    }
 

}




let home = new Home()





// console.log(home.makeAllSounds())

// home.adoptPet(dog1)
// home.adoptPet(cat1)
// home.adoptPet(dog2)
// // console.log(home.makeAllSounds())
// home.makeAllSounds()

home.makeAllSounds();// this doesn't give/return any result/data
home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat1);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();



