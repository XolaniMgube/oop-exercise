class Person{
    constructor (name, age, gender, interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    hello(){
        return("Hello, my name is " + this.name + " and I am " + this.age + "years old.  My interests are " + this.interests[0] + 
        " and " + this.interests[1])
    }
}

let xolani = new Person(
    "Xolani Mgube",
    22,
    "Male",
    ["ping pong", "other things"]
)

let greeting = xolani.hello()
console.log(greeting)






module.exports = Person;