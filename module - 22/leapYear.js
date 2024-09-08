//Check whether a year is a Leap Year or not
//approch 1
/*
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear = isLeapYear(2000);
console.log(leapYear);
*/

//approch 2
/*
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear = isLeapYear(2000);
console.log(leapYear);
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const year = 1900;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);
