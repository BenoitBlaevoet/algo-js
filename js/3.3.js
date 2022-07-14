let og = [1, 2, 3, 4, 5];
let copy = [...og];
let longway = [] ;
for(i of og){
    longway.push(i);
}
console.log(og);
console.log(copy);
console.log(longway);