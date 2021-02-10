//Game States
var PLAY=1;
var END=0;
var gameState=1;

var sword;

function preload(){
  swordImage = loadImage("sword.png");
 
}

function draw(){
  createCanvas(600,600);
  
  //creating sword
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  
  // Score variables and Groups
  score=0;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function setup() {
  createCanvas(600,600);
  
  //creating sword
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  
  
  //set collider for sword
  sword.setCollider("rectangle",0,0,40,40);
  
  //Score variables and Groups
  score=0;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function Draw(){
 background("lightblue");
  
  if(gameState===Play)
    
  //Call fruits and Enemy
  fruits();
  Enemy();
  
  //Move sword with mouse
  sword.y=World.mouseY;
  sword.y=World.mouseY;
  
  //Increase score if sword touching fruit
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destoryEach();
    score=score+2;
  }
  if(gameState===END){
    fruitGroup.destoryEach();
    enemyGroup.desoryEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
    //Change the animation of sword to gameover and reset its
position
  }sword.addImage(gameOverImage);
  sword.x=200;
  sword.x=200;

    
}

