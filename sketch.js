var backgr, backImage;
var cat, catImage, catImg1, catImg2, catRunning, catLastImage;
var mouse, mouseImage, mouseImg1;




function preload() {
    //load the images here
    backImage = loadImage("garden.png");
    catImage = loadAnimation("tomOne.png", "tomTwo.png", "tomThree.png");
    catImg1 = loadImage("tomFour.png");
    catImg2 = loadImage("tomTwo.png")
    mouseImage = loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png");
    mouseImg1 = loadImage("jerryFour.png");
  
}
 
function setup(){
    createCanvas(800,400);
    //create tom and jerry sprites here
   mouse = createSprite(100,301,90,70);
   mouse.addImage(mouseImage);
   mouse.scale = 0.1;




   backgr = createSprite(0,0,800,400);
   backgr.addImage(backImage);
   backgr.scale = 1.5;
  
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", catImg2);
        cat.changeAnimation("catLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
  }


}
