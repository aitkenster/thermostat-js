function Thermostat(){
	this.temperature = 20;
	this.powerSave = true;
};

Thermostat.prototype.increaseTemperature = function(){
	if (this.powerSave === true){
		this.temperature += 1 ? this.temperature < 25 : this.temperature >= 25;
	} else {
		this.temperature += 1 ? this.temperature < 32 : this.temperature >= 32;
	}
};

Thermostat.prototype.decreaseTemperature = function(){
	this.temperature -= 1 ? this.temperature > 10 : this.temperature <= 10
};