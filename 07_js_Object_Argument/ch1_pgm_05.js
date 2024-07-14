var showLarger = function(num1, num2) {
var smaller = Math.min(num1, num2);
var larger = Math.max(num1, num2);

console.log(larger + " is larger than " + smaller);
};

showLarger(5, 20);    
showLarger(-5, -10);  
showLarger(0, 0);    


var showSmallest = function(num1, num2, num3) {
var smallest = Math.min(num1, num2, num3);

console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

showSmallest(5, 20, 10);   
showSmallest(-5, -10, -2);   
showSmallest(0, 0, 0);       
