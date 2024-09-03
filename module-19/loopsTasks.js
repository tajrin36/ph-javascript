// --------------------------------"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.-----------------------------------
console.log("using while loop");
let num = 1;
while(num <= 60){
    console.log(`${num}-I will invest at least 6 hrs every single day for next 60 days!`);
    num++;
}

//using for loop:
console.log("using for loop");
for(let num = 1; num <= 60; num++){
    console.log(`${num}-I will invest at least 6 hrs every single day for next 60 days!`); 
}

//Find all the odd numbers from 61 to 100.
console.log("using while loop");
let oddNum = 61;
while(oddNum <= 100){
    if(oddNum % 2 != 0){
        console.log(`${oddNum}-this is a odd number.`);
        
    }
    oddNum++;
}

//using for loop:
console.log("using for loop");
for(let oddNum = 61; oddNum <= 100; oddNum++){
    if(oddNum % 2 != 0){
        console.log(`${oddNum}-this is a odd number.`);
        
    }
}

//Find all the even numbers from 78 to 98.
let evenNum = 78;
while(evenNum <= 98){
    if(evenNum % 2 === 0){
        console.log(`${evenNum}-this is a even number`);
    }
    evenNum++;
}

//using for loop:
console.log("using for loop");
for(let evenNum = 78; evenNum <= 98; evenNum++){
    if(evenNum % 2 === 0){
        console.log(`${evenNum}-this is a even number.`);
        
    }
}

//Display sum of all the odd numbers from 81 to 131.
let num2 = 81;
let sum = 0;
while(num2 <= 131){
    if(num2 % 2 != 0){
        sum = sum + num2;
        console.log(`odd sum = ${sum}`);
    }
    num2++;
}

//using for loop:
console.log("using for loop");
let sum2 = 0;
for(let num2 = 81;num2 <= 131; num2++){
    if(num2 % 2 != 0){
        sum2 = sum2 + num2;
        console.log(`odd sum = ${sum2}`);
    }
}

//Display sum of all the even numbers from 206 to 311.
let num3 = 206;
let summation = 0;
while(num3 <= 311){
    if(num3 % 2 === 0){
        summation = summation + num3;
        console.log(`even summation = ${summation}`);
    }
    num3++;
}

//using for loop:
console.log("using for loop");

let summation1 = 0;
for(let number3 = 206; number3 <= 311;number3++){
    if(number3 % 2 === 0){
        summation1 = summation1 + number3;
        console.log(`even summation = ${summation1}`);
    }
}
//As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
let i = 0;
while(i <= 10){
    console.log(`5 * ${i} =`,5*i);
    i++;
}

//Implement a countdown timer that counts down from 21 to 15.
let reverse = 21;
while(reverse >= 15){
    console.log(reverse);
    reverse--;
}

//Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for ( let i = 1; i <= 40; i++){
    if(i % 2 === 0){
        console.log(i);
    }
    else if(i % 2 != 0){
        continue;
    }
}

//display odd number from 55 to 85 and skip the numbers divisible by 5.
for (let i = 55; i <= 85; i++){
    if(i % 2 != 0){
        if(i % 5 === 0){
            continue;
        }
        console.log(i);
    }
}

//Write a loop 1 to 200. Use break to exit the loop once you find 100.
for(let i = 1; i <= 200; i++){
    if(i === 100){
        break;
    }
    console.log(i);
}

//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let Sum = 0;
let number = 1;

while (true) {
    Sum += number;
    if (Sum >= 100) {
        break;
    }
    number++;
    console.log(`sum = ${Sum}`);
}

//Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for(let i = 1; i <= 100; i++){
    let square = i * i;
    if(square === i && i > 1){
        
        continue;
        console.log(i);
        
    }
    
    
    
}

