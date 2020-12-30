
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var roof1;
var rope1, rop2, rope3, rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Bob(250, 450);
	ball2 = new Bob(300, 450);
	ball3 = new Bob(350, 450);
	ball4 = new Bob(400, 450);
	ball5 = new Bob(450, 450);
	roof1 = new Roof();

    rope1 = new Rope(ball1.body, roof1.body, -100 );
    rope2 = new Rope(ball2.body, roof1.body, -50 );
    rope3 = new Rope(ball3.body, roof1.body, 0 );
    rope4 = new Rope(ball4.body, roof1.body, 50 );
    rope5 = new Rope(ball5.body, roof1.body, 100 );
	
  
}


function draw() {
  background(255, 255, 255)
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

  function keyPressed(){
    if(keyCode === UP_ARROW){
 //isStatic : false
      Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50, y:-45})
    }
  }




