let person = require("../src/person.js")

let xolani = new person("Xolani Mgube", 22, "Male", ["Ping Pong", "Reading"]);

describe("Person Class", function(){
    it("Sentence", function() {
        expect(xolani.hello()).toBe("Hello, my name is Xolani Mgube and I am 22 years old.  My interests are Ping Pong and Reading");
    })

    it("Name", function(){
        expect(xolani.name).toBe("Xolani Mgube"); 
    })

    it("Age", function(){
        expect(xolani.age).toBe(22); 
    })

    it("First index of interensts", function(){
        expect(xolani.interests[0]).toBe("Ping Pong")
    })
})
