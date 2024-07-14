var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
    planet.diameter = 2 * r;
};


var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("surface area = " + planet.area.toFixed(2) + " square km");
    console.log("volume = " + planet.volume.toFixed(2) + " cubic km");
    console.log("diameter = " + planet.diameter.toFixed(2) + " km");
};


calculateSizes(planet1);
displaySizes(planet1);

