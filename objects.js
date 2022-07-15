let kiosk = {
        Orange:30,
        Mango:20,
        Banana:10,
        price:function(fruit,quantity){
            return `${quantity} Orange for ksh. ${quantity* this.Orange}`
        }
}
console.log(kiosk.price("Orange",2))