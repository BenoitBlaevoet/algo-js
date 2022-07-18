function manhattan(sA, aA, sB, aB){
    console.log(Math.abs(sA - sB) + Math.abs(aA - aB));
}

manhattan(1, 1, 2, 2); // returns 2

manhattan(1, 1, 1, 1); // return 0

manhattan(5, 4, 3, 2); // returns 4