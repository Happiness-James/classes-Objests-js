let kiosk = {
        fruitList:{Orange:30,Mango:20,Banana:10},
        price:function(fruit,quantity){
            return `${quantity} ${fruit} for ksh. ${this.fruitList[fruit]*quantity}`
        }
}
console.log(kiosk.price("Mango",2))