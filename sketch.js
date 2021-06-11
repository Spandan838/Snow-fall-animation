const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var engine,world;
var ice=[];
var ice1=[];


function preload(){

winterI=loadImage("snow3.jpg")
santaI = loadAnimation("sgif.png","sgift.png")
flakeI = loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;
    
  santa =createSprite(100, 300, 20, 20);
  santa.addAnimation("walking",santaI)
  santa.scale = 0.9;

    for (var o = 1; o <=width ; o=o+400) 
  {
    ice.push(new Ice(o,10));
    
  }
  for (var o = 10; o <=width ; o=o+400) 
  {
    ice1.push(new Ice1(o,20));
    
  }
    
}


function draw() {
  background(winterI);
  Engine.update(engine);
  textSize(35);
  text("Marry Christmas",300,30);
  
  if(keyDown("left_arrow")){
    santa.x= santa.x-2;
  }
  if(keyDown("right_arrow")){
    santa.x= santa.x+2;
  }
  for (var o = 0; o < ice.length; o++){
    ice[o].display();
   
  }
  if(frameCount % 30===0){
    ice.push(new Ice(random(100,900),10,10))
  
    }

    if(frameCount % 10===0){
      ice1.push(new Ice1(random(200,700),10,10))
    
      }


   
  drawSprites();
}