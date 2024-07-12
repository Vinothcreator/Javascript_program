var getPlayerName;

getPlayerName = function (playerName) {
    var prefixSuffix = "=".repeat(4);  
    return prefixSuffix + " " + playerName + " " + prefixSuffix;
};

console.log(getPlayerName("Kiki"));   
console.log(getPlayerName("Mahesha")); 


getPlayerName = function (playerName) {
    var border = "|";                   
    var nameLine = " " + playerName;    
    var prefixSuffix = border + "\n"; 

    return prefixSuffix + border + nameLine + "\n" + prefixSuffix;
};

console.log(getPlayerName("Jahver"));

