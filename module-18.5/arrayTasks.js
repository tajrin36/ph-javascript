//------------------------- 1. Declare an array-------------------------
/*
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
console.log("task-1 output :");
let fruits = ['mango', 'orange', 'banana', 'lichi', 'papaya'];
console.log(fruits[3]);
console.log(fruits[2]='jambura');
console.log(fruits);
console.log('\n');

//-------------------------2. Add or remove elements----------------------
/*
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
console.log("task-2 output :");
let places = ["Cox's Bazar",'Sundarbans','Bandarban'];
places.push('Rangamati');
console.log(places);
places.push('Lalbagh Fort', 'Ahsan Manzil');
console.log(places);
places.pop();
console.log(places);
console.log('\n');

//--------------------3. Checking Array Membership with ‘includes’-------------------
/*
create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.
*/
console.log("task-3 output :");
let books = ['OOP', 'C', 'C++', 'python', 'java', 'javascript'];
console.log(books.includes('javascript'));
console.log('the element "javascript" is present in the index no.',books.indexOf('javascript'));
console.log('\n');

//--------------------------------4. Checking if it's an Array-----------------------
/*
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
*/
console.log("task-4 output :");
let students = "tajrin, saad, farha, tasnim, mahia";
console.log("students = ",students);
console.log("is this a array? Ans :",Array.isArray(students));
let id = 20;
console.log("id =",id);
console.log("is this a array? Ans :",Array.isArray(id));
let color = ['red', 'green', 'yellow', 'orange'];
console.log("color = ",color);
console.log("is this a array? Ans :",Array.isArray(color));
console.log('\n');

//-----------------------------------5. Combining Arrays-------------------------
/*
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
console.log("task-5 output :");
let names = ['ina', 'mina', 'dika', 'fika', 'mika', 'bika'];
console.log("array-1 :",names);
let numbers = [30, 60, 66, 52, 100, 99, 34];
console.log("array-2 :",numbers);
let newArray = names.concat(numbers);
console.log("new-array :",newArray);


