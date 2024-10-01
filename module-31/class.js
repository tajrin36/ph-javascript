const products = [
    {id : 1, name : 'lenovo', price : 65000},
    {id : 2, name : 'dell', price : 60000},
    {id : 3, name : 'hp', price : 75000},
    {id : 4, name : 'macbook', price : 165000},
    {id : 5, name : 'samsung', price : 55000},
]
class Product {

    constructor(name) {
        this.name = name;
    }

    speak(talk){
        console.log(`talking about ${talk}`);
    }
}
const lenovo = new Product('tajrin');
console.log(lenovo);
lenovo.speak('hellow')

class Teacher {

    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('teacher teaches us math ');
    }
}
const tapon = new Teacher('tapon sir','physics');
console.log(tapon);
const rashid = new Teacher('rashid sir','chemistry');
console.log(rashid);
