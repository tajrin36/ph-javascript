//!------------------ let and const---------------------
let season = 'rainy';
season = 'winter';
const x = 300;

//!-------------condition (<, >, ===, !==, <=, >=, && , || )-------------------
if (x === 500 || x === 200) {
} else if (x === 300) {
} else {
}

//!---------------------- array-------------------------------
const numbers = [20, 39, 56, 488];
console.log(numbers[3]); //index
console.log(numbers.length); //length

//!------------------------for loop --------------------------
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//!--------------------------function ------------------------
function multiply(num1, num2) {
  const result = num1 * num2;
  console.log(result);
  return result;
}
multiply(8, 10);

//!---------------------------object ------------------------
const student = {
    name: 'tajrin',
    age : 22,
    hobby : "none",

}
//!3 way to access object property
console.log(student.age); //direct by property
console.log(student['age']); //access via property name string
const myVariable = 'age';
console.log(student[myVariable]); //access via property name in a varivle

