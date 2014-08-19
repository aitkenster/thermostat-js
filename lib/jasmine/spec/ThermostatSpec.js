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

	it("the minimum temperature is 10", function(){
		thermostat.temperature = 10;
		thermostat.decreaseTemperature();
		expect(thermostat.temperature).toEqual(10);
	});

	it("the maximum temperature is 25 if psm is on", function(){
		thermostat.temperature =25;
		thermostat.increaseTemperature();
		expect(thermostat.temperature).toEqual(25);
	})

	it("the maximum temperature is 32 if psm is off", function(){
		thermostat.temperature =31;
		thermostat.powerSave = false;
		thermostat.increaseTemperature();
		thermostat.increaseTemperature();
		expect(thermostat.temperature).toEqual(32);
	})

	it("resets the temperature back to 20", function(){
		thermostat.temperature = 25;
		thermostat.reset();
		expect(thermostat.temperature).toEqual(20);
	})

	it("energy usage is high if >= 25", function(){
		thermostat.temperature = 24;
		thermostat.increaseTemperature();
		expect(thermostat.energyRating).toEqual("high");
	})

	it("energy usage is low if < 18", function(){
		thermostat.temperature = 18;
		thermostat.decreaseTemperature();
		expect(thermostat.energyRating).toEqual("low");
	})

});