let marks = 55;
if(marks == 100 || marks >= 60 ){
    console.log("1st condition executed!");
    console.log("Grade A");
} 
else if (marks >= 50 || marks <= 59){
    console.log("2nd condition executed!");
    console.log("Grade B");
}
else if (marks >= 40 || marks <= 49){
    console.log("3nd condition executed!");
    console.log("Grade C");
}
else{
    console.log("4th condition executed!");
    console.log("opss! you failed");
}
