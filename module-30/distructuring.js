const actor = {
    name : 'tajrin',
    age : 22,
    phone : '01758216850',
    salary : 120000
}
// const phone = actor.phone;
// console.log(phone);

// const name = actor.name;
// console.log(name);

//distructuring from the object
const {phone} = actor
console.log(phone);

//array distructing
const number = [2,4,6];
const [first,second] = number;
const [x,y] = [22,44];
