var sea;
var ship_flowing;
var sea_image
var ship

function preload(){
  ship_flowing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image = loadImage("sea.png")
}

function setup(){
  createCanvas(600,300);
  sea =createSprite(300,150,600,20);
  sea.addImage("s1",sea_image);
  sea.velocityX=0;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("flowing", ship_flowing);
  ship.scale = 0.2;
  sea.scale = 0.2;
  sea.velocityX = -3;
}

function draw() {
background("blue");

if (sea.x<0){
sea.x=sea.width/10;
}

drawSprites();
}