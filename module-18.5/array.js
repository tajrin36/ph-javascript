//-----------------arry length--------------------------

let arr = [2, 7, 8, 22, 65, 34, 89, 66, 434, 12, 2, 3]
console.log(arr.length);

//-----------------array index-------------------------
let color = ['red', 'blue', 'green', 'white', 'yellow', 'orange'];
//get elements value by index
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]);
console.log(color[4]);
console.log(color[5]);
console.log(color[6]); //undefined cz there is no item in index 6//

//set or update elements value by index
console.log(color[6] = 'pink');
console.log(color);

//----------------array  push- pop---------------------------
let colors = ['red', 'blue', 'green', 'white', 'yellow', 'orange'];
colors.push('black'); //the element will be added from the end.
console.log(colors);
colors.pop(); //the element will be deleted from the end.
console.log(colors);
colors.unshift('violet'); //the element will be added from the start.
console.log(colors);
colors.shift(); //the element will be deleted from the start.
console.log(colors);

//-------------------array includes method--------------------
let fruits = ['banana', 'orange', 'mango', 'lichi', 'guava', 'papaya'];
console.log(fruits.includes('papaya'));
console.log(fruits.includes('pumpkin'));

//indexOF
console.log(fruits.indexOf('guava'));
console.log(fruits.indexOf('pumpkin'));

