class Paper{
 constructor(x,y,r){

var options={
isStatic:false,
restitution:0.3,
density:1.2,
friction:0.5
  }
  this.r=r;
  this.y=y;
  this.x=x;

  this.image=loadImage("paper.png");
  this.body=Bodies.circle(this.x,this.y,30,options);
  World.add(world,this.body);
 }

  display(){
      var ppos=this.body.position;
      push()
      translate(ppos.x,ppos.y);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r) ;
      pop()
      
     }
};

