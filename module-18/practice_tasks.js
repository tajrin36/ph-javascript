//-------------- task 1--------------------
/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/



let burgerPrice = 300;
if(burgerPrice >= 500){
    console.log("wooho!you will get a free coke!");
}
else{
    console.log("please pay 30tk for coke!");
}


//----------------task 2 ------------------------
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 50;
let height = 1.65;
let BMI = weight / (height ** 2);
if(BMI < 18.5){
    console.log("opps! you are underweight");
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("you are normal");
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("you are overweight");
}
else{
    console.log("you are obese! you need to do workout!");
}


//--------------------task 3-----------------------
/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


let marks = 46;
if(marks >= 90 || marks == 100 ){
    console.log("Grade A");
} 
else if (marks >= 80 || marks == 89){
    console.log("Grade B");
}
else if (marks >= 70 || marks == 79){
    console.log("Grade C");
}
else if (marks >= 60 || marks == 69){
    console.log("Grade D");
}
else{
    console.log("Greade F");
}


//------------------------task 4------------------
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myMarks = 90;
let friendMarks = 56;
if(myMarks > 80){
    if(friendMarks > 80){
        console.log("let's go for a lunch!");
    }
    else{
        if(friendMarks < 80 && friendMarks >= 60){
            console.log("good luck for next time!");
        }
        else{
            if(friendMarks < 60 && friendMarks >= 40){
                console.log("unseen my friend's message");
            }
            else{
                if(friendMarks < 40){
                    console.log("block the friend");
                }
            }
        }
    }
    
    
    
}
else{
    console.log("i'm so sad!");
}


//-------------------------task 5------------------------
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


let num1 = 30;
let num2 = 50;
let result;
//normal if-else
if(num1 > num2){
    console.log("The result will be double of num1. finalResult =",num1 * 2);
}
else{
    console.log("The result will be sum of num1 & num2. finalResult =",num1 + num2);
}

//ternary operator
result = num1 > num2 ? console.log("The result will be double of num1. finalResult =",num1 * 2) : console.log("The result will be sum of num1 & num2. finalResult =",num1 + num2)


//---------------------------task 6--------------------------
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let isStudent = true;
let ticketPrice=500;

if(isStudent){
    console.log("you get 50% discount! Ticket-price =",ticketPrice*0.5);
}
else if(age < 10){
    console.log("wohhoo! Free ticket");
}
else if(age >= 60){
    console.log("you get 15% discount! Ticket- price =",ticketPrice*0.15);
}
else{
    console.log("Regular price! Ticket-price =",ticketPrice);
}

/*
switch(true){
    case (age < 10) :
        console.log("wohhoo! Free ticket");
        break;
    case (age >= 60) :
        console.log("you get 15% discount! Ticket- price =",ticketPrice*0.15);
        break;
    default :
    if(isStudent){
        console.log("you get 50% discount! Ticket-price =",ticketPrice*0.5);
    }
    else{
        console.log("Regular price! Ticket-price =",ticketPrice);
    }
    break;

}  
*/      

