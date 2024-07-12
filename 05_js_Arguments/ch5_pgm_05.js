var square;
square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var cube;
cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

cube(3);
cube(-1);
cube(5);
cube(0.1);

var squareRoot;
squareRoot = function (numberToSquareRoot) {
  var result;
  result = Math.sqrt(numberToSquareRoot);
  console.log("The square root of " + numberToSquareRoot + " is " + result);
};
squareRoot(9);
squareRoot(16);
squareRoot(0.25);
squareRoot(2);
