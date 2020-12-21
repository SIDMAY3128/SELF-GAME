var player
var score = 0
var obstacle 
var coins
var BG
var framecountObstacle = 80
var PLAY = 1
var END = 2
var gameState = PLAY 


function preload (){
  roadImage = loadImage("2.jpg")
  stoneImage = loadImage("cartoon-stone-md.png")
  car1Image = loadImage("car1.png")
  car2Image = loadImage("car2.png")
  car3Image = loadImage("car3.png")
  car4Image = loadImage("car4.png")
  car5Image = loadImage("car5.png")
  car6Image = loadImage("car6.png")
  playerImage = loadImage("player.png")
  coinImage = loadImage("coin.png")
  explosionImage = loadImage("explosion.png")
  coinSound = loadSound("COIN.mp3")
  radio = loadSound("Radio.mp3")



}

function setup() {
  createCanvas(windowWidth,windowHeight);
  coinsGroup = new Group()
  obstaclesGroup = new Group ()

  BG = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  BG.addImage(roadImage)
  BG.scale = 2.5
  BG.velocityY = 10

  player = createSprite(960,830,20,20)
  player.addImage(playerImage)
  player.scale = 0.7
}

function draw() {
  background(125,188,19);  
  drawSprites();
  fill ("black")
  text(mouseX + ' '+ mouseY, mouseX, mouseY)
  textSize (50)
  fill ("Black")
  textFont("Arial Bold")
  strokeWeight(30)
  text ("Score : " + score , 1500 , camera.position.y - 400)
  if (BG.y > windowHeight - 150){
    BG.y = windowHeight/2
  }

  if (gameState === PLAY){

    text (" PRESS R TO SWITCH ON AND OFF THE RADIO",200,camera.position.y-400)
    if (keyDown("R")){
      radio.play()}

      if (keyDown("R") && radio.play(){
        radio.stop()
      }


      // createObstacle();
      // createCoins();
      // increaseLevel();

      if (keyDown(LEFT_ARROW) && player.position.x >= 400 && player.position.x <= 1500){
        player.x = player.x - 5
      }
    
      if (keyDown(RIGHT_ARROW) && player.position.x >= 400 && player.position.x <= 1500 ){
        player.x = player.x + 5
      }
    }
  }
      function createObstacle(){

        if (frameCount % framecountObstacle === 0){
          obstacle = createSprite(random(400,1500),camera.position.y - 450,50,50)
          obstacle.shapeColor = "black"
          var r = Math.round(random(1,6)) 
          obstacle.scale = 0.5
          obstacle.velocityY = random(6,15)
          switch(r){
            case 1: obstacle.addImage(car1Image)
            break;
            case 2: obstacle.addImage(car2Image)
            break;
            case 3: obstacle.addImage(car3Image)
            break;
            case 4: obstacle.addImage(car4Image)
            break;
            case 5: obstacle.addImage(car5Image)
            break;
            case 6: obstacle.addImage(car6Image)
            
          }
          obstaclesGroup.add(obstacle)
        }
      }
      
      function createCoins(){
        if(frameCount%400 === 0){
          coin = createSprite(random(400,1500),0,20,20)
          coin.addImage(coinImage)
          coin.velocityY = BG.velocityY
          
          coinsGroup.add(coin)
      
        }
      }

      function increaseLevel(){

        if (score % 400 === 0 && score > 0){
      
          framecountObstacle = framecountObstacle + 10
      
        }
      }
    

 