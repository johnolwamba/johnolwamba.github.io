describe("String Filter", () => {
    it("Filter takes an array of banned words and returns " +
        "the string after removing all the banned words", () => {
        assert.equal("July 4 is the not best holiday in the states".filter("not"), "July 4 is the best holiday in the states");
    });
});
describe("Array BubbleSort", () => {
    it("Bubble sort is an extension on the Array prototype that sorts any array with the bubble sort algorithm", () => {
        expect([-2, 0, 1, 3, 4, 6]).to.eql([6, 4, 0, 3, -2, 1].bubbleSort());
    });
});
describe("Inheritance", () => {
    it("Teacher object derived from the Person class", () => {
        const me = new Teacher();
        me.initialize("Johnstone Ananda", 28);
        expect(me instanceof Person).to.be.true;
        expect("Johnstone Ananda, 28 years old.").to.eql(me.describe());
    });
});