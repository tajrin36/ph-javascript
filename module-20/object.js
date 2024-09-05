//-------------------object decleration-------------------------
const bottle = {
    brand : 'apple',
    price : 100,
    color : 'white',
    isClear : true,
};
console.log(bottle);
//-------------------get a value using dot notation-------------------------
console.log(bottle.price);

//-------------------get a value using bracket notation-------------------------
console.log(bottle["color"]);

//-------------------keys-------------------------
const keys = Object.keys(bottle);
console.log(keys);

//-------------------keys-------------------------
const values = Object.values(bottle);
console.log(values);

//-------------------nested object-------------------------
const university = {
    name : 'BUBT',
    department : ['CSE','EEE','English','LLB'],
    events : ['bijoy dibosh','21 feb','fairwale'],
    unique : {
        color : 'blue',
        result : {
            cgpa : 4,
            marit : 'top'
        }
    }
};
console.log(university);
console.log(university.unique.result.marit);
const update = university.unique.result.marit = 'average'; // value change 
console.log(university);

//---------------------loops in objects----------------------------
const mobile = {
    brand : "samsung",
    price : 12000,
    color : "black",
    camera : "12mp",
    isNew : true,
};
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}
