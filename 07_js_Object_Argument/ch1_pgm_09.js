var message = "We choose to go to the Moon!";

var startIndex = message.indexOf("go");

console.log("Index of 'go': " + startIndex);

var message = "We choose to go to the Moon!";

var startIndex = message.indexOf("choose");
var wordChoose = message.substr(startIndex, "choose".length);

console.log("The word 'choose': " + wordChoose);


var message = "We choose to go to the Moon!";

var moonIndex = message.lastIndexOf("oo");

console.log("Index of 'oo' in 'Moon': " + moonIndex);
