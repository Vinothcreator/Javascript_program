var sale1;
var sale2;
var sale3;
var sale4;
var sale;
var calculateAndDisplaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 80, taxRate: 5 };

calculateAndDisplaySale = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
    
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------");
};

sale = sale1;
calculateAndDisplaySale();

sale = sale2;
calculateAndDisplaySale();

sale = sale3;
calculateAndDisplaySale();

sale = sale4;
calculateAndDisplaySale();
