class Circle{
    constructor(x=0,y=0,r=1){
        this.xPos = x;
        this.yPos = y;
        this.radius = r;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface(){
        return Math.sqrt(this.radius,2) * Math.PI;
    }
}

let a = new Circle(2,3,5);
a.move(2,1);
console.log(`x: ${a.xPos} y: ${a.yPos} surface: ${a.surface}`);