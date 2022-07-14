let min = prompt("what is the min number?");
let max = prompt("what is the max number?");

if(min>max){
    alert("You're a... /facepalm");
    exit;
}

let current = prompt("what is the current number?");

if(min<current<max){
    let progress = current-min;
    let goal = max-current;
    alert( "current is "+progress+" superior to min and "+goal+" inferior to max");
}