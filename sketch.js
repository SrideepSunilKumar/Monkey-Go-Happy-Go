
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  var survivalTime =0;
 monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  monkey.gravity=82;
  ground = createSprite(400,350,900,10);
  ground.velocityX=-8;
  ground.x=ground.width/2;  

  foodGroup=new Group();
  obstaclesGroup=new Group();
  
}


function draw() {
  background("white");
  
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-14;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground)
  spawnFood();
  spawnObstacles();
  drawSprites();
   stroke("white");
  
  
}
 function spawnFood(){
  if (frameCount % 80===0){
    banana=createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.velocityX=-4;
    banana.scale=0.1;
    
    banana.addImage(bananaImage);
    foodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle=createSprite(800,320,10,40)
    obstacle.velocityX=-8;
    obstacle.scale=0.15;
    obstacle.collide (ground)
    obstacle.addImage(obstaceImage)
    obstaclesGroup.add(obstacle);
  }
}
      






