let a = 10;
let b = 20;
const temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

//using distruction
let x = 10;
let y = 20;
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);

