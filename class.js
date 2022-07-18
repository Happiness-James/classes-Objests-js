// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
class KioskPrices {
    constructor(fruit, quantity){
    this.fruit = fruit
    this.quantity = quantity
    this.fruitPriceList = {"Orange": 30, "Mango": 40, "Avocado": 20 };
    this.getTotalCost = function () {
    return ` ${quantity} ${fruit} for KES ${quantity * this.fruitPriceList[fruit]}`
    }
    }
    }
    var kiosk = new KioskPrices('Avocado', 2);
    console.log(kiosk.getTotalCost());