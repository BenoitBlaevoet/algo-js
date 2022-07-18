
let button = document.getElementById("button");
let background = document.getElementById("background")
background.style.backgroundColor = "white";
button.addEventListener("click",function(){
    console.log('click');
    if(background.style.backgroundColor === "white"){
        background.style.backgroundColor = "#5f80b1";
    }else{
        background.style.backgroundColor = "white";
    }
});