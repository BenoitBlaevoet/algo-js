learner = ["a","e","d","c","b","f","g","h" ]
function pickLearner(inputAr, n){
    if(n>inputAr.length){
        return("the number of selected cannot be higher than learners");
    }else(console.log("ok"))
    let newarray = [];
    while(newarray.length<n){
        let num = Math.floor(Math.random()*inputAr.length);
        console.log(num);
        if(newarray.indexOf(inputAr[num])==-1){
            newarray.push(inputAr[num]);
        }
    }
    return newarray;
}

console.log(pickLearner(learner, 5));