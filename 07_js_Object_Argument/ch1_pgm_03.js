var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color) {
    return {
        make: make,
        model: model,
        year: year,
        color: color
    };
};


getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + ", color: " + car.color;
};


car1 = buildCar("Toyota", "Camry", 2023, "Silver");
car2 = buildCar("Tesla", "Model S", 2022, "Red");


console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
