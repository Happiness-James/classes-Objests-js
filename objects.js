let kiosk=[
    {
    name :"Orange",
    price : 30,
    },
    {
    name :"Banana",
    price : 40,
    },
    {
    name :"Mango",
    price : 10,
    }]
    function getTotalCost(name,quantity){
    let m =kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for Ksh ${m.price*quantity}`)
    }
    getTotalCost("Mango",2)