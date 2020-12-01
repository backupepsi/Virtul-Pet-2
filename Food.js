class Food {
    constructor(){
       // this.FoodStock = 0;
        // this.LastFed = 0;
        this.image = loadImage("../pics/Milk.png");
    }
    
getFoodStock(){
   var foodStockRead = database.ref('Food');
   foodStockRead.on("value", function(data){
       FoodCount = data.val();
   })
}    

updateFoodStock(num){
    database.ref('Food').update({
        'Food' : num
    })
}

deductFoodStock(food){
    database.ref('Food').update({
        'Food' : food
    })
}

display(){
   for(var f = 0;f<800; f=f+32 ){
    image(this.image, f, 75, 50,50);
   } 
}
}