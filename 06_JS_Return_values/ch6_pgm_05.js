var costFor12Hours = totalCost(30, 40, 12);
console.log("$" + costFor12Hours); 


var totalCost = function(callOutCharge, costPerHour, numberOfHours, discount) {
    var total = callOutCharge + costPerHour * numberOfHours;
    if (discount) {
        total -= discount;
    }
    return total;
};


var totalCost = function(callOutCharge, costPerHour, numberOfHours, discount) {
    var total = callOutCharge + costPerHour * numberOfHours;
    if (discount) {
        total -= discount;
    }
    return total;
};


var totalCostWithDiscount = totalCost(30, 40, 3, 20);
console.log("$" + totalCostWithDiscount); 
