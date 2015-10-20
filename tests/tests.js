alavar expect = chai.expect;

describe("Temperature_Tests", function() {

    it("19C", function() {
        var temp = new Temperatura(19,"C");
        expect(temp.get_num()).to.equal(19);
        expect(temp.get_tipo()).to.equal("C");
    });
    it("67F", function() {
        var temp = new Temperatura(67,"F");
        expect(temp.get_num()).to.equal(67);
        expect(temp.get_tipo()).to.equal("F");
    });
    it("273.1K", function() {
        var temp = new Temperatura(273.1,"K");
        expect(temp.get_num()).to.equal(273.1);
        expect(temp.get_tipo()).to.equal("K");
    });

});
