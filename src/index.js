console.log("index.js file is hooked into index.html!!!")

const pantriesEndPoint = "http://127.0.0.1:3000/api/v1/pantries";
const foodsEndPoint = "http://127.0.0.1:3000/api/v1/foods";

document.addEventListener('DOMContentLoaded', () => {
    getPantries();
    getFoods();
    let createFoodForm = document.querySelector('#create-food-form');
    createFoodForm.addEventListener('submit', (e) => 
    createFormHandler(e));
    let deleteFood = document.querySelector('#food-container');
    deleteFood.addEventListener('click', (e) => deleteHandler(e));
})

function getPantries() {
    document.querySelector('#pantry-container').innerHTML = '';
    fetch(pantriesEndPoint)
    .then(response => response.json())
    .then(pantries => {  
        pantries.data.forEach(pantry => {
            let pantryAttributes  = pantry.attributes  
            let newPantry = new Pantry(pantry, pantryAttributes)
            document.querySelector('#pantry-container').innerHTML += newPantry.renderPantryCard()
        })
    });
}

function getFoods() {
    document.querySelector('#food-container').innerHTML = '';
    fetch(foodsEndPoint)
    .then(response => response.json())
    .then(foods => {
        foods.data.forEach(food => {      
            let newFood = new Food(food, food.attributes)
            document.querySelector('#food-container').innerHTML += newFood.renderFoodCard();
        })
    })
}

function createFormHandler(e) {
    e.preventDefault();
    const nameInput = document.querySelector('#input-name').value
    const categoryInput = document.querySelector('#input-category').value
    const quantityInput = document.querySelector('#input-quantity').value
    const pantryIdInput = parseInt(document.querySelector('#pantry_id').value)
    console.log(`New Food Submitted to Pantry!\nName: ${nameInput}\nCategory: ${categoryInput}\nQuantity: ${quantityInput}\npantry_id: ${pantryIdInput}`)
    postFoodFetch(nameInput, categoryInput, quantityInput, pantryIdInput)
}

function postFoodFetch(name, category, quantity, pantry_id) {
    const bodyData = {name, category, quantity, pantry_id}
    fetch(foodsEndPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(food => {
        getPantries();
        const foodData = food.data;
        let newFood = new Food(foodData, foodData.attributes)
        document.querySelector('#food-container').innerHTML += newFood.renderFoodCard();
    })
}

function deleteHandler(e) {
    e.preventDefault();
    let foodId = e.toElement.id
    deleteFoodFetch(foodId);
}

function deleteFoodFetch(id) {
    console.log(`Deleting food with ID:${id}`);
    fetch(foodsEndPoint+`/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response)
    .then(food => {
        getPantries();
        getFoods();
    })
}