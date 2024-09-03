// const num =7;
// if (num < 1)
// {
//     console.log("small num");
// }
// console.log("something new is cooking!");

/*

let num1 = 32;
let num2 = 47852;
if ( num1 % 10 == num2 % 10){
    console.log("last digit same");
}
else{
    console.log("not same");

}
*/

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
let num = 1;
let sum = 0;
while(num <= 10){
    console.log(num);
    sum = sum + num;
    console.log(`sum = ${sum}`);
    num++;
}

let num2 = 1;
while(num2 <= 10){
    if(num2 % 2 === 0){
        console.log(`even = ${num2}`);
    }
    num2++;
}
let num3 = 1;
while(num3 <= 10){
    if(num3 % 2 != 0){
        console.log(`odd = ${num3}`);
    }
    num3++;
}
for (let i = 1; i <= 5; i++){
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if( i % 2 === 0){
        console.log(`even num : ${i}`);
    }
}

let summation = 0;
for(let i = 1; i <= 10; i++){
    console.log(i);
    summation = summation + i;
    console.log(`sum = ${summation}`);
}
