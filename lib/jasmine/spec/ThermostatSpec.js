describe('the thermostat', function(){
	
	beforeEach(function(){
		thermostat = new Thermostat
	});

	it("always starts automatically at 20 degrees", function(){
		expect(thermostat.temperature).toEqual(20);
	});

	it("the temperature can be increased", function(){
		thermostat.increaseTemperature();
		expect(thermostat.temperature).toEqual(21);
	});

	it("the temperature can be decreased", function(){
		thermostat.decreaseTemperature();
		expect(thermostat.temperature).toEqual(19);
	});


});