// formula d (P, Q) = √ (x2 – x1)^2 + (y2 – y1)^2

/* exemple of results
*[x,y]
*Point A = [1, 1], point B = [2, 2] => 1.41
*Point A = [1, 1], point B = [3, 1] => 2
*Point A = [4, 1], point B = [1, 1] => 3
*Point A = [-2, 2], point B = [2, -2] => 5.65
*/
let a = [4, 1];
let b = [1, 1];
/***Use the square root of the soustraction of x's to square plus the soustraction of y's to square.
*Math.sqrt is used for square root
*Math.pow is used for the square (can be used for any exposant value)
***/
function calcDistance(a, b){
    return Math.sqrt(Math.pow((a[0]-b[0]),2)+Math.pow((a[1]-b[1]),2))
}

console.log(calcDistance(a,b));