function rand10(){
    let a = Math.floor(Math.random()*10)+1;
    return a;
}

function multiRand(n){
    let randarray = [];
    for(i=0;i<n;i++){
        randarray.push(rand10());
    }
    return randarray;
}

console.log(multiRand(5));