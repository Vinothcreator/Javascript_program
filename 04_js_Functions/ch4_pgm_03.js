var sale1 = { price: 140, taxRate: 15 };
var sale2 = { price: 40, taxRate: 10 };
var sale3 = { price: 120, taxRate: 20 };
var sale4 = { price: 80, taxRate: 12 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;
sale4.tax = sale4.price * sale4.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
sale4.total = sale4.price + sale4.tax;

function displaySaleInfo(sale, saleNumber) {
  console.log("Sale " + saleNumber);
  console.log("Price = $" + sale.price);
  console.log("Tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
  console.log("Total cost = $" + sale.total.toFixed(2));
  console.log("------------------------------\n");
}
displaySaleInfo(sale1, 1);
displaySaleInfo(sale2, 2);
displaySaleInfo(sale3, 3);
displaySaleInfo(sale4, 4);
