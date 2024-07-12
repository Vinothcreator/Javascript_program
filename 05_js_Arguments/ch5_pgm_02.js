var msg;
var msg2;
var showMessage;

msg = "It's full of stars!";
msg2 = "Hello, Universe!";

showMessage = function () {
	console.log(msg);
	console.log(msg2);
	console.log(msg + " " + msg2);
};

showMessage();
