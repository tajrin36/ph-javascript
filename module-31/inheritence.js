class vehicle{

    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log("car is moving");
    }
}
class bus extends vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this,seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
class truck extends vehicle {
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
}
