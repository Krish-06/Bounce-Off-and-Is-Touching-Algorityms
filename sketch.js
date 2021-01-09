var moving, frozen;
var car, wall;
function setup() {
  createCanvas(1200,1000);
  moving = createSprite(400, 200, 50, 50);
  frozen = createSprite(200,100,50,50);
  moving.shapeColor = "blue";
  frozen.shapeColor = "green";
  car = createSprite(200,150,150,50);
  wall = createSprite(900,150,50,200);
  car.shapeColor = "purple";
  wall.shapeColor = "red";
  car.velocityX = 7;
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX;
  moving.y = mouseY;
  if (isTouching(car,wall)){
    textSize (30);
    fill  ("black");
    text ("Touched",400,200);
    //car.velocityX = 0;
  }
  else{
    textSize (30);
    fill  ("black");
    text ("Not Touched",400,200);
  }
  BounceOff(car,wall);
  drawSprites();
}

function isTouching(p1,p2){
  if(p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2){
    return true;
  }
  else{
    
    return false;
  }
}

function BounceOff(p1,p2){
  if(p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2){
      p1.velocityX = (-1)* p1.velocityX;
    }
    else if (p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2){
      p1.velocityY = (-1)* p1.velocityY;
    }
}