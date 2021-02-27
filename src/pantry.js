console.log("pantry.js file is hooked into index.html!!!")

class Pantry {
    constructor(pantry, pantryAttributes) {
        this.id = pantry.id;
        this.name = pantryAttributes.name;
        this.foods = pantryAttributes.foods;
        Pantry.all.push(this);
    }
    renderPantryCard() {
        return `
            <div data-id=${this.id}>
                <h2>${this.name}</h2>
                <p>Pantry ID is ${this.id}</p>` +
                this.renderFoodsCard() +
            `</div>
            <br>
            `;    
    }     

    renderFoodsCard() {
        let foodsLength = this.foods.length;
        let returnString = "";
        for(let i=0;i<foodsLength;i++){
            let foodString = '<p>' + this.foods[i].name + '</p>';
            returnString = returnString.concat(foodString);
        }
        console.log(returnString)
        return returnString;
    }

    static findPantryById(id) {
        return this.all.find(pantry => {pantry.id === id})
    }
}

Pantry.all = [];