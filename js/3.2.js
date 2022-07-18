let first = [1, 2, 3, 4, 5];
let second = [100, 101, 102];

/*function averageofarray(a){
    let sum = 0;
    let divisor = a.length;
    for(number of a){
        sum += number;
    }
    sum = sum / divisor;
    console.log(sum);
}*/

let sum = 0;
let divisor = first.length;
for(a of first.concat(second)){
    sum += a;
}
sum = sum / divisor;
console.log(sum);
/*
averageofarray(first);
averageofarray(second);
console.log(5/2)*/