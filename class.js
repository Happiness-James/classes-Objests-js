// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
class KioskCalc{
    constructor(fruit,quantity){
        this.fruit = fruit;
        this.quantity = quantity;
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }
        this.getTotalCost = function(){
            return `${quantity} ${fruit} for ksh ${quantity*this.fruitsPriceList.mango}`
    } 
}
}
var kiosk = new KioskCalc("mango",5);
console.log(kiosk.getTotalCost()) 
