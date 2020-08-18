const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ground1;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight=300;
function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  
  
  ground1=new Ground(240,780,480,20);
  for(var k=0;k<=width;k=k+80)
  {
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight))

  }

  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,75,10))

  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,175,10))
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,275,10))

  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,375,10))
  }
  if(frameCount%90===0)
  {
    particles.push(new particle(random(width/2-10,width/2+10),10,10))

  }
  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  ground1.display(); 
  for(var k=0;k<divisions.length;k++)
  {
    divisions[k].display();

  }
  for(var j=0;j<plinkos.length;j++)
  {
    plinkos[j].display();

  }
  for(var i=0;i<particles.length;i++)
  {
    particles[i].display();

  }
  
  drawSprites();
}