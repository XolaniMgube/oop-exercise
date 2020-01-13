let path = require("../src/person.js")

let testedClass = path.Person.hello();

describe("name", () =>{

    it("Name", () =>{
        expect(xolani.name).toBe("Xolani Mgube");
    })
})