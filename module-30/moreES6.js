const glass = {
    name : 'glass',
    color : 'orange',
    price : 20,
    isCleaned : true
};

//find all the keys from the object
const keys = Object.keys(glass);
console.log(keys);

//find all the values from the object
const values = Object.values(glass);
console.log(values);

//arrays of array/2D array
const pair = Object.entries(glass);
console.log(pair);

//delete property from object
delete glass.isCleaned;
console.log(glass);

//freeze
Object.freeze(glass);
glass.source = 'bangladesh';
console.log(glass);
