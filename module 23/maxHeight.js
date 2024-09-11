//maximum number using array

const heights = [30,55,52,99,60,32];
function maxHeight(number){
    let max = number[0];
    for(const num of number){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = maxHeight(heights);
console.log("max height :",max);


//minumum number using array
const chotoHeights = [30,55,52,99,60,32];
function minHeight(number){
    let min = number[0];
    for(const num of number){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const min = minHeight(chotoHeights);
console.log("min height :",min);
