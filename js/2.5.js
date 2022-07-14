let message = "What is your favorite number ?"
let i = 0;
let fav= 0;
while(fav!=42){
    fav=prompt(message);
    if (i >= 5)message= "What is your favorite number ? (hint: 42 is very nice)";
    i++;
}