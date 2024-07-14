var planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389,
    sizeRank: 4
};


console.log(getPlanetInfo(planet2));


getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position +
           ", type: " + planet.type +
           ", radius: " + planet.radius + " km";
};


console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
