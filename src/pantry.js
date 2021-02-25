console.log("pantry.js file is hooked into index.html!!!")

class Pantry {
    constructor(pantry, pantryAttributes) {
        this.id = pantry.id;
        this.name = pantryAttributes.name;
        this.foods = pantryAttributes.foods;
        Pantry.all.push(this);
    }
}

Pantry.all = [];