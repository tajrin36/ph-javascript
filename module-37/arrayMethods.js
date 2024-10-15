//!-------------array of objects ----------------------
const products = [
    {name : 'laptop', price : 3200, brand : 'lenovo', color : 'silver'},
    {name : 'phone', price : 3300, brand : 'samsung', color : 'golden'},
    {name : 'watch', price : 320, brand : 'mimi', color : 'red'},
    {name : 'shirt', price : 200, brand : 'yellow', color : 'blue'},
    {name : 'shoe', price : 320, brand : 'bata', color : 'orange'},
    {name : 'mouse', price : 200, brand : 'xxxx', color : 'black'},
    {name : 'highlighter', price : 100, brand : 'unknown', color : 'pink'},
]
//!map(return korbe)
const brands = products.map(products => products.brand);
console.log(brands);
const prices = products.map(products => products.price);
console.log(prices);

//!forEach(return korbe na kichu)
products.forEach(products => console.log(products));
products.forEach(products => console.log(products.color));
products.forEach(products => console.log(products.price));

//!filter(jara condition fullfil korbe sei value gula kei dibe just, it will also return an array)
const cheap = products.filter(products => products.price <= 300);
console.log(cheap);

//!find(jara condition fullfil korbe sei value er just prothom ta dibe)
const special = products.find(products => products.name.includes('n'));
console.log(special);
