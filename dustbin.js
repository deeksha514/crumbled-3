class Dustbin {
    constructor(x,y){

        this.dw=200;
        this.dh=250;
        this.x=x;
        this.y=y;
        this.wallThickness=20;

        this.image=loadImage("dustbin.png");

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dw, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dw/2, this.y-this.dh/2, this.wallThickness, this.dh, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dw/2, this.y-this.dh/2, this.wallThickness, this.dh, {isStatic:true})
		
        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
        }

    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position; 

        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle)
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(posBottom.x, posBottom.y+10);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        imageMode(CENTER);
        image(this.image, 0,-this.dh/2,this.dw, this.dh)
        //rect(0,0,this.dustbinWidth, this.wallThickness);
        pop()
        
    }
}