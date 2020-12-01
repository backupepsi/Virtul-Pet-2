

//Create variables here
var dog, hapdog, database, FoodCount, foodStock, feedPet, addFood, fedTime, lastFed, foodObj;

function preload() {
  dogIMG = loadImage("../pics/Dog.png");
  hapdog = loadImage("../pics/happydog.png");
  
}
function setup() {
createCanvas(800, 800);
 dog = createSprite(width/2, height/2, 50,50);
dog.scale = 0.5
 dog.addImage(dogIMG);

 feedPet = createButton("Feed Pet");
 feedPet.position(600, 95);
 addFood = createButton("Add Food");
 addFood.position(700,95);


foodObj = new Food();
database = firebase.database();
  //foodStock = database.ref('Food');
  //foodStock.on("value", readStock);

}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
   foodObj.getFoodStock();
   feedPet.mousePressed(()=>{
    dog.addImage(hapdog);     
    FoodCount=FoodCount-1;
     foodObj.deductFoodStock(FoodCount);
     
     //foodObj.updateFoodStock(foodObj.getFoodStock()-1);
     /*database.ref('/').update({
       'Food' : foodObj.getFoodStock()
     })*/
   })
   addFood.mousePressed(()=>{
    FoodCount+=1;
    //foodObj.deductFoodStock(FoodCount);
    foodObj.updateFoodStock(FoodCount);
    
  })
   foodObj.display();
}

function readStock(data){
  foodS = data.val();
}




