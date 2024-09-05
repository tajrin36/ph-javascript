let friend = ["x", "y", "z", "a", "b", "c"]
for (let i = 0; i < friend.length; i++){
    console.log(i);
    console.log(friend[i]);
}

//-------------------reverse array using loop---------------------
let reversed = friend.reverse();
console.log(reversed);

//another approch
const reversedNumber = [];
for(let i = 0; i < friend.length; i++){
    const num = friend[i];
    reversedNumber.unshift(num);
    console.log(reversedNumber);
}

