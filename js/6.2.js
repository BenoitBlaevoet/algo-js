class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
        this.bottomRightXPos = topLeftXPos + length;
        this.bottomRightYpos = topLeftYPos + width;
    }
    collides(otherRectangle){
        if(
            (
                (this.topLeftXPos < otherRectangle.bottomRightXPos)
                &&
                (this.topLeftYPos < otherRectangle.bottomRightYpos)
            )
            ||
            (
                (otherRectangle.topLeftXPos < this.bottomRightXPos)
                &&
                (otherRectangle.topLeftYPos < this.bottomRightYpos)
            )
        )
        {
            return true;
        }else{
            return false
        }
    }
}

let a = new Rectangle(1,1,10,15);
let b = new Rectangle(10,14,6,8);
console.log(a);
console.log(b);
let c = a.collides(b);
console.log(c);