//-----------------string decleration------------------------
const country = "Bangladesh";
console.log(country);
console.log(country.length); //length
console.log(country[3]); //index
console.log(country.toLowerCase());
console.log(country.toUpperCase());

//-------------------trim method--------------------
const fruit = '  mango';
const name = 'mango';
if(fruit.trim() === name.trim()){
    console.log("same");
}
else{
    console.log("different");
}

//------------------------slice method-----------------------
const letters = "abcdefghijklmnopqrstuvwxyz"
const part = letters.slice(0,5);
console.log(part);

//--------------------split method--------------------------
const color = 'blue,pink,yellow,red,violet,orange,green';
const colorSplit = color.split(',');
console.log(colorSplit);

//------------------------join method--------------------
const primaryColor = ['blue','pink','yellow','red','violet','orange','green'];
console.log(primaryColor.join('+'));
console.log(primaryColor.join('-'));
console.log(primaryColor.join('|'));

//---------------------concat method-----------------------
const intake = '50';
const department = 'CSE';
console.log(intake.concat(' ').concat(department));
console.log(department.concat(' ').concat(intake));

//---------------------includes method-----------------------
console.log(department.includes('s')); //case sensitive 
console.log(department.includes('S')); 

//----------------------reverse method------------------------
const sentence = "ami vaat kheye ashlam"
let reverse = "";
for(const letter of sentence){
    reverse = letter + reverse; 
}
console.log(reverse);

