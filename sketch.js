
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var paper1
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paper1=new Paper(160,100,50,50)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper1.display()
  drawSprites();
 
}



