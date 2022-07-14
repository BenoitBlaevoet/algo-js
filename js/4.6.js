
let num = 7 /*prompt("Enter a number")*/;

function factorial(a){
    let factorial=1;
    if(a<0){
        console.log('Factorial does not exist for negative numbers');
    }
    else if(a===0){
        console.log('The factorial of 0 is 1');
    }
    else{
        for(i=1;i<=a;i++){
            factorial = factorial*i;
        }
    }
    return factorial;
}
console.log(factorial(num));