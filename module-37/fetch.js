//!----JSON----(stringify,parse)
const student = {
  name: 'tajrin',
  age: 22,
  favSeries: ['money heist', 'stranger things'],
};
//!object to string
const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);
//!string to object
const studentJson2 = JSON.parse(studentJson);
console.log(studentJson);
console.log(studentJson2);

//!fetch
// const url = '';
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//!keys and values
const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);

//! forEach ==> array te use hobe
//! for of ==> array like object a use hobe
//! for in ==> object a use hobe

//!-------------------- add or remove of an array ------------------
const products = [
    {name : 'laptop', price : 3200, brand : 'lenovo', color : 'silver'},
    {name : 'phone', price : 3300, brand : 'samsung', color : 'golden'},
    {name : 'watch', price : 320, brand : 'mimi', color : 'red'},
    {name : 'shirt', price : 200, brand : 'yellow', color : 'blue'},
    {name : 'shoe', price : 320, brand : 'bata', color : 'orange'},
    {name : 'mouse', price : 200, brand : 'xxxx', color : 'black'},
    {name : 'highlighter', price : 100, brand : 'unknown', color : 'pink'},
]
//! add object
const newProduct = {name : 'color pen', price : 10, brand : 'woodmark', color : 'blacl'};
const newproducts = [...products,newProduct]; //!spread operator
console.log(products);
console.log(newproducts);
//!remove object
const remaining = products.filter(products => products.name !== 'phone'); //!filter 
console.log(remaining);
