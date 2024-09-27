//max number
const max = Math.max(2,7867,34,5,9);
console.log(max);

const numbers = [10,39,45,3,4,98,100];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

//use spread operator to copy
const friends = [12,34,56,78];
const bondhu = friends;
// bondhu.push(199);
// console.log(friends);
// console.log(bondhu);
const dosto = [...friends]; //copy
friends.push(999);
console.log(friends);
console.log(dosto);
const moreFriends = [...friends, 10000]; //copy plus extra elements added
console.log(moreFriends);


