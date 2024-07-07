var sayHello;
var printLetters;

sayHello = function () {
    console.log("Hello\nWorld!");
};

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

sayHello();
sayHello();
sayHello();

printLetters();
