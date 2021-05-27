
var marioImg,mario,bgImg;
var obstacleImg,groundImg,ground,obstacles;



function preload(){

    marioImg=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
    obstacleImg=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");
    bgImg=loadImage("bg.png");
    groundImg=loadImage("ground2.png");



}


function setup(){

createCanvas(700,500);

mario=createSprite(100,380,350,200);
mario.scale=1.7;
mario.addAnimation("mario",marioImg);
ground=createSprite(350,455,700,70);
ground.scale=1.1;
ground.velocityX=-5;
ground.addImage(groundImg);


}

function draw(){

background(bgImg);

if(ground.x<200){
    ground.x=350;
}

if(keyDown("space")&&mario.y>=360){
    mario.velocityY=-12;
}

mario.velocityY=mario.velocityY+0.8;


mario.collide(ground);

console.log(mario.y);


obstacle();
drawSprites();
}





function obstacle(){

if(frameCount%130===0){

    obstacles=createSprite(700,380,15,15);
    obstacles.velocityX=-5;
    obstacles.addAnimation("obstacleAnimation",obstacleImg);
    obstacles.scale=1.3
}



}


















