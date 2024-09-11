
//min num using object

const phones = [
    {name :"samsung", price : 20000, camera : "12mp", color : "black"},
    {name :"nokia", price : 10000, camera : "12mp", color : "black"},
    {name :"one plus", price : 30000, camera : "12mp", color : "black"},
    {name :"oppo", price : 25000, camera : "12mp", color : "black"},
    {name :"xoami", price : 12000, camera : "12mp", color : "black"},
]

function getCheapPhones(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheapPhone = getCheapPhones(phones);
console.log("cheapest phone :",cheapPhone);



