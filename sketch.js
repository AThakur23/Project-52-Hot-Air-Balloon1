var bg, bgImg, bg1, bg1Img, bg2, bg2Img
var bottomGround
var topGround
var middleGround
var balloon, balloonImg
var bird, birdAnimation, birdImg;
var grandparents, grandparentsAnimation;
var house, houseImg;
var burst, burstImg;
var bGroup;
var life = 3;

function preload(){
bgImg = loadImage("assets/bg.png");

bg1Img = loadImage("assets/bg1.JPG");

bg2Img = loadImage("assets/bg2.JPG");

burstImg = loadImage("assets/pop.png");

houseImg = loadImage("assets/house.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

finishImg = loadAnimation("assets/balloon1.png");

birdAnimation = loadAnimation("assets/bird1.png", "assets/bird2.png", "assets/bird3.png");

grandparentsAnimation = loadAnimation("assets/grandparents1.png", "assets/grandparents2.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight-40);

//background image

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(110,200,20,50);
balloon.addAnimation("balloon", balloonImg);
balloon.addAnimation("stop", finishImg);
balloon.scale = 0.5;

bGroup = new Group()

grandparents = createSprite(width+1600, height-80, 30, 30)
grandparents.addAnimation("grandparents", grandparentsAnimation);
grandparents.scale = 0.6;

house = createSprite(width+1790, height-125, 30, 30)
house.addImage("house", houseImg);
house.scale = 0.5;

ground = createSprite(width+499, height-300, 30, height);
ground.addImage(bg1Img);
ground.scale = 0.8;
ground.y = 320;
console.log(ground.y);

middleGround = createSprite(width+1490, height-300, 30, height+100);
middleGround.addImage(bg2Img);
middleGround.scale = 0.8;
middleGround.y = 320;
console.log(middleGround.y);

//burst = createSprite(30, 30, 30, 30)
//burst.addImage(burstImg);
//burst.scale = 0.5;
}

function draw() {
  
  background("skyblue");
  image(bgImg, 0, 0, width, height);
  image(bgImg, width+10, height+10, width, height);
  
  
        
          //making the hot air balloon jump
          //if(keyDown("space") && balloon.x > 110) {
            //balloon.velocityX= -3 ;
            //console.log(balloon.x);
          //}

          if (balloon.x > 2545) {
            balloon.velocityX = 0;
            balloon.velocityY = 0;
            balloon.changeAnimation("stop");
          }

          if (keyDown(RIGHT_ARROW)){
            balloon.velocityX = +5;
          }

          if (keyDown(LEFT_ARROW)){
            balloon.velocityX = -5;
          }

          if (keyDown(DOWN_ARROW)){
            balloon.velocityY = +3;
          }

          if (keyDown(UP_ARROW)){
            balloon.velocityY = -3;
          }

          console.log(balloon.x);
          //adding gravity
          //balloon.velocityY = balloon.velocityX+2;

        camera.x = balloon.x;

        console.log(frameCount);
        

        balloon.depth = ground.depth;
        balloon.depth = balloon.depth+1; 
        
        grandparents.depth = middleGround.depth;
        grandparents.depth = grandparents.depth+1;

        house.depth = middleGround.depth;
        house.depth = house.depth+1;

        balloon.depth = middleGround.depth;
        balloon.depth = balloon.depth+1;

        if (bGroup.isTouching(balloon)) {
          life = life-1;
        }
        
        console.log(life);
        
        bird();
        drawSprites();
        text("Life: ", width-500, height-500); 

    }

function bird() {
  if (frameCount > 1 && frameCount% 100 == 0){
    birdImg = createSprite(width+1000, height-500, 30, 30);
    birdImg.addAnimation("bird", birdAnimation);
    birdImg.scale = 0.6;

    birdImg.x = random(width, width+3000);
    birdImg.y = random(height, height-500);

    birdImg.velocityX = -10;
    birdImg.depth = ground.depth;
    birdImg.depth = bird.depth+1;

    bGroup.add(birdImg);

    console.log(bGroup.position);
  }  
}

