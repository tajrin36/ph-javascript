//Calculate the average of the odd numbers in an array

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(`odd numbers : ${number}`);
            odds.push(number); 
        }
    }
    console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum,count);
    const avg = sum / count;
    return avg;
}
const numbers = [100,33,75,32,98,45,4,65,99];
const avg = oddAverage(numbers);
console.log(avg);
