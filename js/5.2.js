let object = {
    "Friends" : {
        year : 1994,
        cast : [
            "Actor 1",
            "Actor 2",
            "Actor 3",
            "Actor 4",
        ]
    },
    "Vikings" : {
        year : 2013,
        cast : [
            "Actor a",
            "Actor b",
            "Actor c",
            "Actor d",
        ]
    }
}

function askTvSerie(){
    let name = prompt("What if your favorite TV Serie ?");
    let yearProduction = prompt("when was it produced ?");
    let castMember = [];
    let newActor = prompt("What are the actor of the serie?");
    while(newActor!==""){
        castMember.push(newActor);
        newActor = prompt("What are the actor of the serie?");
    }
    object[name] = {
        year : yearProduction,
        cast : castMember
    };
    return object[name];
}

function randomizeCast(tvSerie){
    //return tvSerie;
    let copyCast = [...tvSerie.cast];
    copyCast.sort(function(){
        return Math.random() -0.5;
    });
    return copyCast
}

console.log(randomizeCast(askTvSerie()));