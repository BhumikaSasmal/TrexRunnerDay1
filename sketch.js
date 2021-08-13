var trex, trex_running, trex_collided, ground, invisible_ground, ground_image;


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided=loadImage("trex_collided.png");
  ground_image=loadImage("ground2.png");
  
}

function setup() {
  createCanvas(400, 400);
  trex=createSprite (50,380,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  ground=createSprite(200,380,400,20);
  ground.addImage("ground", ground_image);
  ground.x=ground.width/2;
  ground.velocityX=-2;
  invisible_ground=createSprite(200,390,400,10);
  invisible_ground.visible=false;
}

function draw() {
  background(220);
  trex.collide(invisible_ground);
  if (keyDown("space")){
    trex.velocityY=-12;
  }
  trex.velocityY=trex.velocityY+0.6;
  if (ground.x<0){
     ground.x=ground.width/2;
  }
  
  drawSprites();
  
}