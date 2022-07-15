// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
class KioskCalc{
    constructor(fruitsPriceList){
        this.fruitsPriceList = fruitsPriceList
}

}
let kiosk = new KioskCalc({ "orange": 30, "mango": 15, "avocado": 40 })
KioskCalc.prototype.getTotalCost = function(fruit,quantity){
    return `${quantity} ${fruit} for ksh ${quantity*this.fruitsPriceList.orange}`
} 
console.log(kiosk.getTotalCost("orange",6))