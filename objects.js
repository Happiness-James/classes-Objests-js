let kiosk=[
    {
    name :"Orange",
    price : 30,
    },
    {
    name :"Apple",
    price : 40,
    },
    {
    name :"Guava",
    price : 10,
    }]
    function getTotalCost(name,quantity){
    let m =kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${m.price*quantity}`)
    }
    getTotalCost("Apple",2)