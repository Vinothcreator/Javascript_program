var sum1 = add(10, 5);
console.log(sum1); 

var sum2 = add(100, 37);
console.log(sum2); 

var sum = add(50, 23);
console.log(`The sum of 50 and 23 is ${sum}`);


var sum3 = add(10, add(5, 7));
console.log(sum3); 

var addThree = function(num1, num2, num3) {
    var intermediateSum = add(num1, num2);
    return add(intermediateSum, num3);
};

var sum4 = addThree(10, 20, 30);
console.log(sum4);



