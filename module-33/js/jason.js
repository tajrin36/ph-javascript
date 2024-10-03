const user = {id : 36, name: 'tajrin', job: 'student'};
const stringfied = JSON.stringify(user);

//javascript
console.log(user);

//JASON
console.log(stringfied);

const shop = {
    owner : 'alia',
    address : {
        street : 'kochukhet er goli',
        city : 'mirpur',
        country : 'Bangladesh'
    },
    products : ['laptop','mic','mobitor','keyboard'],
    revenew : 45000,
    isOpen : true,
    isNew : 'false'
}
//object to string
const stringfied2 = JSON.stringify(shop);
console.log(stringfied2);

//string to object
const toObj = JSON.parse(stringfied2);
console.log(toObj);
