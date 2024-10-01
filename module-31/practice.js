const products = [
    {id : 1, name : 'lenovo', price : 65000},
    {id : 2, name : 'dell', price : 60000},
    {id : 3, name : 'hp', price : 75000},
    {id : 4, name : 'macbook', price : 165000},
    {id : 5, name : 'samsung', price : 55000},
]

//map
const names = products.map(p => p.name);
console.log(names);
const prices = products.map(p => p.price);
console.log(prices);

//forEach
products.forEach(p => console.log(p.id));

//filter
const expensive = products.filter(p => p.price>70000);
console.log(expensive);

//find
const affordable = products.find(p => p.price<60000);
console.log(affordable);

//reduce 
const total = products.reduce((accum,current)=> accum+current.price,0);
console.log(total);

