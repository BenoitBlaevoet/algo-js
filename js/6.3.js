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

function rndPos()
{
    return Math.random() * 101 - 50;
}
function rndSize()
{
    return Math.random() * 11 - 5;
}
let numberOfRectangle = 1000;
let rects = [];
// Create all rectangles O(n)
for(let i = 0; i < numberOfRectangle; i++)
{
    rects.push(new Rectangle(rndPos(), rndPos(), rndSize(), rndSize()));
}
// Test all rectangles between each other to test for a collision O(n²) [AKA: n(n-1)/2 opérations]
let x = 0;
for(let i = numberOfRectangle - 1; i > 0; i--)
{
    for(let j = i - 1; j >= 0; j--)
    {
        if(rects[i].collides(rects[j]))
        {
            console.log(`Rectangle ${i} collided with rectangle ${j}`);
        }
    }
}