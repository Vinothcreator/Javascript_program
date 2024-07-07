var displayMenu;
var displayMyMenu;

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) Download file"); 
    console.log("(4) Settings");
    console.log("(9) Quit");
};

displayMyMenu = function () {
    console.log("My custom menu:");
    console.log("(1) Start");
    console.log("(2) Stop");
    console.log("(3) Restart");
    console.log("(4) Status");
    console.log("(9) Exit");
};
displayMenu();
displayMyMenu();
