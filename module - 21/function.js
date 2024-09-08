//-----------------function declearation--------------------
function helloWorld() {
  //function decleration
  console.log("hello World");
}
helloWorld(); //function calling

//function with perameter
function square(number) {
  console.log("value of the parameter :", number);
  let borgo = number * number;
  console.log("result of the square value :", borgo);
}
square(5);

function difference(num1, num2) {
  const diff = num1 - num2;
  console.log("difference is : ", diff);
}
const fatherAge = 60;
const myAge = 20;
difference(fatherAge, myAge);

//function return
function tenTimes(number) {
  const result = number * 10;

  return result;
}
const output = tenTimes(5);
console.log(output);

//another example of function return

function add(price1, price2) {
  const total = price1 + price2;

  return total;
}
const outputSum = add(20, 50);
console.log("Sum of total price = ", outputSum);

function add2(price1, price2) {
  return price1 + price2;
}
const outputSum2 = add(50, 50);
console.log("Sum of total price = ", outputSum2);

function doMath(num1, num2) {
  const addition = num1 + num2;
  const substraction = num1 - num2;
  const multiplication = addition * substraction;
  const result = multiplication / 2;

  return result;
}
const result = doMath(10, 5);
console.log(result);

//conditional return
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  else if(number % 2 != 0){
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(10));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(5));
console.log(isOdd(10));

//various parameter function
function evenSized(str){
    const size = str.length;
    console.log(str,size);
}
evenSized("dhaka");
evenSized("mirpur");



function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }

    return sum;

}
const nums = [4, 2, 1, 6];
const sum = sumOfNumber(nums);
console.log("sum of numbers is = ",sum);

function evenNumberOnly(numbers){
    let evens = [];
    for(const number of numbers){
        if(number % 2 == 0){
            console.log(number);
        }
    }

}

console.log = []
