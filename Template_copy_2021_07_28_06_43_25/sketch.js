var monkey , monkey_running, monkeyimage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup 
var ground
var score

function preload(){
  createCanvas(800,400);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  //monkeyimage = loadImage ("sprite_0.png");
}



function setup() {
  
monkey = createSprite(100,316,10,10)
monkey.addAnimation("running", monkey_running); 
monkey.scale = 0.1;

ground = createSprite (400,350,800,10)
ground.velocityX = -4;


score = 0;

}


function draw() {
background(255);
  
if(keyDown("space")){
monkey.velocityY = -5;   
}
monkey.collide(ground);

monkey.velocityY+=0.8  

if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
drawSprites(); 
}




