//unit convert inch to feet,miles to kilometre
//approch-1
/*
function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const x = inchToFeet(75);
console.log(x);
*/

//approch-2
function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const feetRemaining = inch % 12;
    const result = feetNumber + ' ft' + ' ' + feetRemaining + ' inch';
    return result;
}
const x = inchToFeet(75);
console.log(x);
