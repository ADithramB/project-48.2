
var bluebox,bluebox1
var target,target1,target2,target3
var gameover1,gameover;
var greenbox,greenbox1;
var win;


var PLAY =1;
var END =0;
var WIN=2

var gameState = PLAY;

function preload(){
   
    bluebox1 = loadImage("bluebox.png")
    target = loadImage("redbox.png")
    greenbox1 = loadImage("greenbox.png")
    gameover1 = loadImage("gameover.png")
    win1 = loadImage("WIN.png")



}

function setup() {
    createCanvas(1000, 500);
   

    

    bluebox = createSprite(200,220,20,50)
	  bluebox.addImage(bluebox1)
	  bluebox.scale = 0.05

    win = createSprite(500,250,20,10)
    win.addImage(win1)

    greenbox = createSprite(975,250,20,50)
	  greenbox.addImage(greenbox1)
	  greenbox.scale = 0.05

    gameover = createSprite(500,250,20,10)
    gameover.addImage(gameover1)

    target1 = createSprite(950,250,20,10)
    target1.addImage(target)
    target1.scale = 0.2 
    

    target2 = createSprite(750,50,20,10)
    target2.addImage(target)
    target2.scale = 0.2 

    target3 = createSprite(600,450,20,10)
    target3.addImage(target)
    target3.scale = 0.2 
   
    target1.velocityY = -5
    target2.velocityY = -3
    target3.velocityY = -7
    
 
edges = createEdgeSprites();    


    

 
}

function draw() {
    background("black")

    if(bluebox.isTouching(greenbox)){
      gameState = WIN
    }

    if(gameState === PLAY){
   

   
      

      
      if(keyIsDown(RIGHT_ARROW)){
        bluebox.x=bluebox.x+5
      }
      if(keyIsDown(LEFT_ARROW)){
        bluebox.x=bluebox.x-5
      }
      if(keyIsDown(UP_ARROW)){
        bluebox.y=bluebox.y-5
      }
      if(keyIsDown(DOWN_ARROW)){
        bluebox.y=bluebox.y+5
      }
      


    if(bluebox.isTouching(target1)){
      gameState = END
    }
    if(bluebox.isTouching(target2)){
      gameState = END
    }
    if(bluebox.isTouching(target3)){
      gameState = END
    }

    
   
      target1.visible = true
      target2.visible = true
      target3.visible = true
      bluebox.visible = true
      gameover.visible = false
      win.visible= false


      target1.bounceOff(edges);
      target2.bounceOff(edges)
      target3.bounceOff(edges)


    }
    else if(gameState === END){
      target1.visible = false
      target2.visible = false
      target3.visible = false
      bluebox.visible = false
      gameover.visible = true
      
    }
    if (gameState === WIN){
      
  
      win.visible = true
    }





  



  


    

    drawSprites();


}






