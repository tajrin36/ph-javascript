//!---------distructuring------------
const numbers = [10,20,30];
const [x,y,z] = [10,20,30];
console.log(x,y,z);
const [a,b,c] = numbers;
console.log(a,b,c);

const student = {
    name: 'tajrin',
    age : 22,
    favSeries :["money heist","stranger things"],

}
const [firstSeries,secondSeries] = student.favSeries;
console.log(firstSeries,secondSeries);

//!--------------object distructuring---------------
const {name,age} = {name:'tajrin',age:22};
console.log(name,age);

const employee = {
    ide:'vs code',
    designation:'developer',
    device:'mac',
    language:['html','css','js'],
    specification:{
        height:77,
        weight:56,
        address:'mirpur',
        drink:'water',
        watch :{
            color:'red',
            price:1200,
            brand:'apple',
        }
    }
}
const {device} = employee; //!object destructuring
const {weight,drink} = employee.specification; //!object er vitor object destructuring tai bam pashe o object 
const [language] = employee; //!language akta array er vitor ache tai array destructuring 
const {watch} = employee.specification.watch;
