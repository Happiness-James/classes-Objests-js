let kiosk=[
    {
    fruit :"Orange",
    price : 30,
    },
    {
    fruit :"Banana",
    price : 40,
    },
    {
    fruit :"Mango",
    price : 10,
    }]
    function getTotalCost(fruit,quantity){
    let m =kiosk.find(item=>item.fruit===fruit)
    console.log(`${quantity} ${fruit} for Ksh ${m.price*quantity}`)
    }
    getTotalCost("Mango",2)