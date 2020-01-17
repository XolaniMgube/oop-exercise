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


let cat1 = new Cat("Kurtlin")
let dog1 = new Dog("Lentswe")
let dog2 = new Dog("Mdu")


class Home{
    constructor(){
        this.animalArray = []
    }
  
    adoptPet(para){
        this.animalArray.push(para)
        // console.log(this.animalArray)
    }
    
    makeAllSounds(){ 
        if (this.animalArray == null){
            return " "
        }

        for (let i = 0; i < this.animalArray.length; i++){
            return this.animalArray[i].sound()
        }

        console.log(this.animalArray.length.sound())

        
    }


}




let home = new Home()





// console.log(home.makeAllSounds())

home.adoptPet(dog1)
home.adoptPet(cat1)
home.adoptPet(dog2)
// console.log(home.makeAllSounds())
home.makeAllSounds()



