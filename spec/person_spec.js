let person = require("../src/person.js")

let xolani = new person("Xolani Mgube", 22, "Male", ["Ping Pong", "Reading"]);

describe("Person Class", function(){
    it("Should contain the sentence", function() {
        expect(xolani.hello()).toBe("Hello, my name is Xolani Mgube and I am 22 years old.  My interests are Ping Pong and Reading");
    })

    it("Should contain the Name person", function(){
        expect(xolani.name).toBe("Xolani Mgube"); 
    })

    it("Should contain the age of new person", function(){
        expect(xolani.age).toBe(22); 
    })

    it("contains the second index of interensts", function(){
        expect(xolani.interests[1]).toBe("Reading")
    })
})
