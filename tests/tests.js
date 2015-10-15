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
    it("25C = 77.0F", function() {
        var temp = new Temperatura();
        temp.num = 25;
        temp.tipo= "C";
        calculate();
        var result = converted1.innerHTML;
        expect(result).to.equal(77.0);
    });
    /*it('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted1.innerHTML, "0.0 Celsius");
        assert.deepEqual(converted2.innerHTML, "273.1 Kelvin");
    });
    it('57F = 287.0 Kelvin', function() {
        original.value = "57F";
        calculate();
        assert.deepEqual(converted2.innerHTML, "287.0 Kelvin");
        assert.deepEqual(converted1.innerHTML, "13.9 Celsius");
    });
    it('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted1.innerHTML, "113.0 Farenheit");
        assert.deepEqual(converted2.innerHTML, "318.1 Kelvin");
    });
    it('12C = 285.1 Kelvin', function() {
        original.value = "12C";
        calculate();
        assert.deepEqual(converted2.innerHTML, "285.1 Kelvin");
        assert.deepEqual(converted1.innerHTML, "53.6 Farenheit");
    });
    it('273.15K = 0C', function() {
        original.value = "273.15K";
        calculate();
        assert.deepEqual(converted1.innerHTML, "0.0 Celsius");
        assert.deepEqual(converted2.innerHTML, "32.0 Farenheit");     
    });
    it('304.0K = 87.5 Farenheit', function() {
        original.value = "304.0K";
        calculate();
        assert.deepEqual(converted2.innerHTML, "87.5 Farenheit"); 
        assert.deepEqual(converted1.innerHTML, "30.9 Celsius");   
    });
    it('12C = 285.1 Kelvin', function() {
        original.value = "12C";
        calculate();
        assert.notDeepEqual(converted1.innerHTML, "85.1 Kelvin");
        assert.notDeepEqual(converted2.innerHTML, "253.6 Farenheit");
    });
    it('Resultado == String', function() {
        original.value = "-27.18C";
        calculate();
        assert.isString(converted1.innerHTML);
    });
    it('Resultado != Number', function() {
        original.value = "18.27K";
        calculate();
        assert.isNotNumber(converted2.innerHTML);
    });
    it('10X = error', function() {
        original.value = "10X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });*/

});
