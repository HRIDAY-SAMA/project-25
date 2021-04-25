
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinimg=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,600,60);
ground=new Ground(400,680,800,20);

leftSide = new Dustbin(550,620,20,100);
bottom = new Dustbin(610,660,100,20);
rightside = new Dustbin(670,620,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  Engine.update(engine);
  paper.display();
  ground.display();
  leftSide.display();
  rightside.display();
  bottom.display();
  image(dustbinimg,535,520,150,150)




  
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:130, y:-145})
}

}

