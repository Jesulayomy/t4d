// JavaScript Bind Method
this.car = 'Horrible Honda';

var layoGarage = {
	car: "BMW",
	getCar: function() {
		return this.car;
	}
};

console.log(layoGarage.getCar());

var storeCarError = layoGarage.getCar;

console.log(storeCarError()); // Wrong car in global scope

var realStoreCar = layoGarage.getCar.bind(layoGarage);

console.log(realStoreCar()); // Correct car in layoGarage scope
