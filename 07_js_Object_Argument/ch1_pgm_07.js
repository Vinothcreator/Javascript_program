var getBig = function(str) {
    return str.toUpperCase();
};

var planet = "Jupiter";
var bigPlanet = getBig(planet);

console.log(planet + " becomes " + bigPlanet);


var getSmall = function(str) {
    return str.toLowerCase();
};

var country = "AUSTRALIA";
var smallCountry = getSmall(country);

console.log(country + " becomes " + smallCountry);
