//simple add function declaration
function add (a,b){
    const sum = a+b;

    return sum;
}
const result = add(10,20);
console.log(result);

//we can directly return the sum result
function add (a,b){
    return a+b;
}
const sumResult = add(19,1);
console.log(sumResult);

//function expression
const sub = function(a,b){
    return a-b;
}

//arrow function
const sub2 = (a,b) => a-b;
const subResult = sub2(2,4);
console.log(subResult);

const addition = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const result2 = addition(2,4,5,6);
console.log(result2);

//3 ways to write arrow function
const nyNmae = () => console.log('tajrin'); //empty paranthesis
const square = a => a*a; // no paranthesis
const substraction = (a,b) => a-b; //with paranthesis

//more arrow function using object
const getAge = (person) => person.age; //with bracket
const student = {name : 'tajrin', age: 22};
const age = getAge(student);
console.log(age);

//arrpw function using array
const getThirdNumber = numbers => numbers[2]; //without bracket
const third = getThirdNumber([2,4,6,7,10]);
console.log(third);

//no parameter
const getPI = () => Math.PI;
console.log(getPI()); 

//large arrow function
const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mul = x*y*z;
    const result = sum+mul;

    return result;
}
