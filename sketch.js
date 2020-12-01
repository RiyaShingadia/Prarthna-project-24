
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(0, 0, 0);
	rectMode(CENTER);
	ellipseMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	 ground = new Ground (width/2, 650, width, 15);

	 box1 = new Dustbin(480, 592, 20, 100);
	 box2 = new Dustbin(580, 632, 200, 20);
	 box3 = new Dustbin(680, 592, 20, 100);

	 paperBall = new Ball(150, 450, 20);


  
	// keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

	ground.display();

	box1.display();
	box2.display();
	box3.display();
	// keyPressed();
	paperBall.display();

  drawSprites();
//   ();

}

function keyPressed(){
	
	if (keyCode === 32){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:50,y:-60 });
	}
}

// 