// compere between 2 numbers
function maxNum(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = maxNum(50,100);
console.log("max num = ",max);


//compere between 3 numbers\
function maxNumber(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
const maximum = maxNumber(30,40,50);
console.log("max number is : ",maximum);

//compere between many numbers
const maxx = Math.max(20,48,21,3,99,34);
console.log("maximum number is : ",maxx);
