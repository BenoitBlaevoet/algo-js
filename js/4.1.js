// Prompt the user to enter the date of the rectangle.
// Multiply the two value to return the surface

class SurfaceOfRect{
    constructor(){
        //Ask the value when the class is constructed
        this.width = prompt("What is the width of the rectangle");
        this.length = prompt("What is the length of the rectangle");
    }
    calcSurface(){
        //calculate the surface with the give value
        return this.width * this.length;
    }
}

let surface = new SurfaceOfRect();
console.log(surface.calcSurface());