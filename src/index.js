console.log("index.js file is hooked into index.html!!!")

const endPoint = "http://127.0.0.1:3000/api/v1/foods"

document.addEventListener('DOMContentLoaded', () => {
    getFoods();
    let createFoodForm = document.querySelector('#create-food-form');
    createFoodForm.addEventListener('submit', (e) => 
    createFormHandler(e));
})

function getFoods() {
    fetch(endPoint)
    .then(response => response.json())
    .then(foods => {
        console.log(foods);
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
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(food => {
        const foodData = food.data;
        render(foodData);
    })
}