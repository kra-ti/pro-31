const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divHeight=200;

function setup() {
  createCanvas(480,700);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(width/2,height,width,20);
  
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divHeight/2,10,divHeight));
  }
  for(var i=40;i<=width;i=i+50){
    var p=new Plinko(i,75)
    plinkos.push(p);
  }
  for(var a=15;a<=width-10;a=a+50){
    var o=new Plinko(a,175)
    plinkos.push(o);
  }
  for(var s=40;s<width;s=s+50){
    var u=new Plinko(s,275)
    plinkos.push(u);
  }
  for(var d=15;d<=width-10;d=d+50){
    var y=new Plinko(i,375)
    plinkos.push(y);
  }
  
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10))
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
 
  ground.display();
  drawSprites();
}