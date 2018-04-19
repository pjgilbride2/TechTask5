describe("Person", function () {
  it("has a greeting", function() {
    var person = new Person();
    expect(person.greetGeneral).toBe("Something that is not Hello!");
  });
    it("has a greeting", function () {
        var person = new Person("Patrick");
        expect(person.greetSpecific).toBe("Something that is not Hello Patrick!");
    });
});
