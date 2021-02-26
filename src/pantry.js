console.log("pantry.js file is hooked into index.html!!!")

class Pantry {
    constructor(pantry, pantryAttributes) {
        this.id = pantry.id;
        this.name = pantryAttributes.name;
        this.foods = pantryAttributes.foods;
        Pantry.all.push(this);
    }
    renderPantryCard() {
        const foodsArray = [];
        this.foods.forEach(food => {
            foodsArray.push(food.name)
        });
        console.log(`foodsArray: ${foodsArray}`)
        return `
            <div data-id=${this.id}>
                <h2>${this.name}</h2>
                <p>Pantry ID is ${this.id}</p>
                <p>Foods: ${foodsArray}</p>
            </div>
            <br>
            `;    
    }
            
            
}

Pantry.all = [];