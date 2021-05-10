var backgroundimage; 
var marioback ; 
var mario , marioimage, mariojump  ; 
var invground , mrjm ; 
var ob , obb ; 

function preload() {
    marioback = loadImage("b2.png");
    marioimage = loadAnimation("mario1.png","mario2.png","mario3.png") ; 
    mrjm = loadAnimation("mariojump.png"); 
    ob = loadAnimation("ob1.png","ob2.png","ob3.png") ; 


}

function setup(){
createCanvas(1200,600);
backgroundimage = createSprite(0,0,600);
backgroundimage.addImage(marioback); 

backgroundimage.velocityX = -2 ; 
backgroundimage.x = backgroundimage.width/2 ; 
mario = createSprite(50,530,50,50);
mario.addAnimation("mario",marioimage); 
mario.scale = 1
 ;
invground = createSprite(300,560,600,20);
invground.visible = false ; 
//mario.debug = true ; 

}

function draw(){
       background("black");
       console.log(mario.y);
       if(backgroundimage.x<481){
        backgroundimage.x = backgroundimage.width/2 ; 

       }
       if(keyWentDown("SPACE")&&mario.y>500){
          mario.velocityY = -16  ;
          mario.addAnimation("jump",mrjm) ;
           

       }
       else if(keyWentUp("SPACE")){

       
        mario.addAnimation("mario",marioimage); 
       }
       mario.velocityY = mario.velocityY+0.8 ; 
       mario.collide(invground); 

spawnOb();
       
       drawSprites(); 
}
function spawnOb(){
    if(frameCount%100===0){
     obb = createSprite(Math.round(random(300,1200)),530,50,50);
     obb.addAnimation("OBSTACLE",ob); 
     obb.scale = 1.5 ; 
     obb.velocityX = - 6 
    }


}



