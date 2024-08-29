let age = 70;
let price = 5000;

if(age >= 20 && age <30){
    //will get 10% discount on food price
    let newPrice = price * 0.1;
    console.log("1st condition executed");
    console.log("your food price is :",newPrice);
}
else if (age < 20){
    //will get 13% discount on food price
    let newPrice = price * 0.13;
    console.log("2nd condition executed");
    console.log("your food price is :",newPrice);
}
else{
    console.log("3rd condition executed");
    console.log("opps! you don't get any discount");
}
