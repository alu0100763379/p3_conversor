var expect = chai.expect;

describe("Temperature_Tests", function() {

    it("18C", function() {
        var temp = new Temperatura(18,"C");
        expect(temp.num).to.equal(18);
        expect(temp.tipo).to.equal("C");
    });
    it("67F", function() {
        var temp = new Temperatura(67,"F");
        expect(temp.num).to.equal(67);
        expect(temp.tipo).to.equal("F");
    });
    it("273.1K", function() {
        var temp = new Temperatura(273.1,"K");
        expect(temp.num).to.equal(273.1);
        expect(temp.tipo).to.equal("K");
    });

});
