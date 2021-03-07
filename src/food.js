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
            <div food-id=${this.id}>
                <h2>${this.name}</h2>
                <h3>Quantity: ${this.quantity}</h3>
                <p>Category: ${this.category}</p>
                <button type="button" class="btn btn-outline-warning" id=${this.id}>Take ${this.name}</button>
                <br><br> 
             </div>`;
    }

    static findByName(name) {
        return this.all.find(food => food.name === name);
      }  // Currently unused but working static utility function.
}

Food.all = [];