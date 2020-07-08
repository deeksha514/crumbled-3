
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var world;
var paper,ground,box1;
var sling;

function setup() {
	createCanvas(1200, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground= new Ground(600,670,1200,20);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paper= new Paper(200,450,70);
	//create Dustbin
	box1=new Dustbin(1000,650);
	//create a sling
    sling=new SlingShot(paper.body ,{x:200,y:450});
	 Engine.run(engine);
	 
	}

function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  ground.display();
  box1.display();
  sling.display();
 }


/*function keyPressed(){
	if (keyCode===UP_ARROW){
     
		Matter.Body.applyForce(paper.body,paper.body.position,{x:185,y:-185});
		
	}
}
*/
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();

}



