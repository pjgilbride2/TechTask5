describe("Person", function () {
    it("has a greeting", function () {
        var person = new Person();
        expect(person.greetGeneral).toBe("Hello!");
    });
    it("has a greeting", function () {
        var person = new Person("Patrick");
        expect(person.greetSpecific).toBe("Hello Patrick!");
    });
});
