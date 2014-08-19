function Thermostat(){
	this.temperature = 20;
	this.powerSave = true;
	this.energyRating = "average"
};

Thermostat.prototype.increaseTemperature = function(){
	if (this.powerSave === true){
		this.temperature += 1 ? this.temperature < 25 : this.temperature >= 25;
	} else {
		this.temperature += 1 ? this.temperature < 32 : this.temperature >= 32;
	}
	this.getEnergyRating();
};

Thermostat.prototype.decreaseTemperature = function(){
	this.temperature -= 1 ? this.temperature > 10 : this.temperature <= 10
	this.getEnergyRating();
};

Thermostat.prototype.reset = function(){
	this.temperature = 20;
	this.getEnergyRating();
};

Thermostat.prototype.getEnergyRating = function(){
	if (this.temperature >= 25){
		this.energyRating = "high"
	} else if (this.temperature < 18){
		this.energyRating = "low"
	} else {
		this.energyRating = "average"
	}
};
