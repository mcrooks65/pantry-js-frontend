console.log("index.html file is hooked into index.js!!!")

const endPoint = "http://127.0.0.1:3000/api/v1/foods"

document.addEventListener('DOMContentLoaded', () => {
    getFoods();
})

function getFoods() {
    fetch(endPoint)
    .then(response => response.json())
    .then(foods => {
        console.log(foods);
        foods.data.forEach(food =>{           
        const foodMarkup = `
        <div data-id=${food.id}>
            <h2>${food.attributes.name}</h2>
            <h3>Quantity: ${food.attributes.quantity}</h3>
            <p>${food.attributes.category}</p>
            <button data-id=${food.id}>edit</button>
        </div>
        <br>`;
        document.querySelector('#food-container').innerHTML += foodMarkup
        });
    })
}