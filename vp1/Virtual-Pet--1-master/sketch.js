//Create variables here
var dog, dogImg, database, foodS, foodStock

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImg); 

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  backgorund(46,139,87);  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }

  drawSprites();
  //add styles here
  textSize(30);
  textAlign(CENTER);
  text()

}

function readStock(data){
    foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


