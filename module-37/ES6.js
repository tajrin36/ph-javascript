const numbers = [20, 39, 56, 488];
const student = {
  name: 'tajrin',
  age: 22,
  hobby: 'none',
};

//!------------template string -----------------
const about = `my name is ${student.name} and age = ${student.age} and number is = ${numbers[2]}`;
console.log(about);

//!-----------------arrow function --------------
const sum = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};

//!------------------ spread operator ---------------
const currentNumber = [...numbers];
console.log(currentNumber); //copy
const currentNumber2 = [...numbers,45];
console.log(currentNumber2);
