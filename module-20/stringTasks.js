//Count how many times a string has the letter a
let Name = "husna jahan tajrin";
let count = Name.split("a").length - 1;
console.log(count);


//Count how many times a string has the letter a or A
let Name2 = "istiAk ahmed sAad";
let Count = Name2.split("a").length-1;
console.log(`nums of "a" : ${Count}`);
let Count2 = Name2.split("A").length-1;
console.log(`nums of "A" : ${Count2}`);

//Check whether a string contains all the vowels a, e, i, o, u

let Name3 = "istiAk ahmed sAad";
let countVowel = Name3.split("a","e","i","o","u").length-1;
console.log(`nums of "A" : ${countVowel}`);

//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let randomString = "abcdxyzcdXnjh"
if(randomString.includes("x") || randomString.includes("X")){
    let newString = randomString.replace("x" , "y").replace("X" , "Y");

    console.log(newString);
}
