var getPlayerName = function(playerName) {
    return playerName;
};

var getPlayerHealth = function(playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

var getPlayerPlace = function(playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var getBorder = function() {
    return "================================";
};

var getPlayerItems = function(playerItems) {
    return "Items: " + playerItems;
};

var getPlayerInfo = function(playerName, playerPlace, playerHealth, playerItems) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getPlayerItems(playerItems); 
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: "a rusty key, a piece of cheese"
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    items: "a torch, a map"
};

console.log(getPlayerInfo(player1.name, player1.place, player1.health, player1.items));
console.log(getPlayerInfo(player2.name, player2.place, player2.health, player2.items));
