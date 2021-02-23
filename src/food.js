console.log("food.js file is hooked into index.html!!!")

class Food {

    constructor(food, foodAttributes) {
        this.id = food.id;
        this.name = foodAttributes.name;
        this.category = foodAttributes.category;
        this.quantity = foodAttributes.quantity;
        this.pantry_id = foodAttributes.pantry_id;
        Food.all.push(this);
        
    }
}

Food.all = [];