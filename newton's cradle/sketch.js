
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1,roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	invisibleBody1 = new invisibleBody(300,300);
	invisibleBody2 = new invisibleBody(340,300);
	invisibleBody3 = new invisibleBody(380,300);
	invisibleBody4 = new invisibleBody(420,300);
	invisibleBody5 = new invisibleBody(460,300);
	roof1 = new roof(385,300)
	bob1 = new BOB(300,500);
	bob2 = new BOB(340,500);
	bob3 = new BOB(380,500);
	bob4 = new BOB(420,500);
	bob5 = new BOB(460,500);
	chain1 = new rope(bob1.body,invisibleBody1.body);
	chain2 = new rope(bob2.body,invisibleBody2.body);
	chain3 = new rope(bob3.body,invisibleBody3.body);
	chain4 = new rope(bob4.body,invisibleBody4.body);
	chain5 = new rope(bob5.body,invisibleBody5.body);

	
	Engine.run(engine);
  
}


function draw() {
	line ();
  rectMode(CENTER);
  background("violet");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  invisibleBody1.display();
  invisibleBody2.display();
  invisibleBody3.display();
  invisibleBody4.display();
  invisibleBody5.display();
  drawSprites();
 
}



