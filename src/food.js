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

    renderFoodCard() {
         return `
            <div data-id=${this.id}>
                <h2>${this.name}</h2>
                <h3>Quantity: ${this.quantity}</h3>
                <p>${this.category}</p>
                <button data-id=${this.id}>edit</button>
            </div>
            <br>`;
    }

    static findByName(name) {
        return this.all.find(food => food.name === name);
      }  // Currently unused but working static utlity function.
}

Food.all = [];