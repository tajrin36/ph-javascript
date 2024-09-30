const numbers = [1,2,3,4,5];
const output = numbers.map(num => num*2);
console.log(output);
const output2 = numbers.map(num => num+5);
console.log(output2);

//find length
const friends = ['tom','john','michel','oliver'];
const result = friends.map(frnd => frnd.length);
console.log(result);

//find 1st letter
const friends2 = ['tom','john','michel','oliver'];
const result2 = friends.map(frnd => frnd[0]);
console.log(result2);
