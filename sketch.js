var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(800,680,800,20);
ball1 = new Ball(600,650,4);
dustbin1 = new Dustbin(300,675,20,100);
dustbin2 = new Dustbin(100,675,20,100);
dustbin3 = new Dustbin(305,675,150,20);

	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}



