//! truthy ==> 'name', any-digit, {}, []
//! falsy ==> '', 0, false, null, undefined

let myVariable = 5;
//!check truthy
if(myVariable){
    console.log(myVariable);
}
else{
    console.log("nothing");
}

let myMoney = 100;
//!check falsy
if(!myMoney){
    console.log("nothing");
}
else{
    console.log(myMoney);
}

//! conditional statement
const money = 100;
let food;
if(money > 500){
    food = "biryani";
}
else{
    food = "vaat,pani";
}
//!shortcut method (ternary operator)
let food2 = money > 500 ? "biryani" : "vaat,pani"; 

//! any digit to string conversion
let num = 10;
console.log(num);
let numStr = num + '';
console.log(numStr);

//! string to any digit 
const input = '100';
console.log(input);
const numInput = +input;
console.log(numInput);

let isActive = true;
const showUser = () => console.log('display user');
const hideUser= () => console.log('hide user');

//! toggle
isActive = !isActive;

