var line = function(lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};

for (var i = -20; i <= 60; i += 10) {
    console.log("Line length: " + i);
    console.log(line(i));
    console.log("--------------------------");
}

var spaces = function(spaceLength) {
    spaceLength = Math.max(0, spaceLength);
    spaceLength = Math.min(40, spaceLength);
    return " ".repeat(spaceLength);
};

for (var i = -20; i <= 60; i += 10) {
    console.log("Spaces length: " + i);
    console.log(spaces(i));
    console.log("--------------------------");
}

var emptyBox = function(width) {
    width = Math.max(0, width);
    width = Math.min(40, width);

    var topBottomLine = "=".repeat(width);
    var middleLine = "=" + " ".repeat(width - 2) + "=";

    console.log(topBottomLine);
    for (var i = 0; i < 3; i++) {
        console.log(middleLine);
    }
    console.log(topBottomLine);
};


emptyBox(12);
console.log("--------------------------");
emptyBox(5);
console.log("--------------------------");
emptyBox(40);
