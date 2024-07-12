var showPlayerName = function (playerName) {
    var line = "*" + showLine(playerName.length + 2) + "*";
    console.log(line);
    console.log("| " + playerName + " |");
    console.log(line);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showPlayerName(playerName);
    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);
    console.log("");
};

var showLine = function (length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += "*";
    }
    return line;
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);
