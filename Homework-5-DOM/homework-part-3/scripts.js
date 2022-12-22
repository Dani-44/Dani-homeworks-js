// HOMEWORK 3

let myDiv = document.querySelector(".class");

let recipeInput = prompt("Please enter name of your recipe");
myDiv.innerHTML = `<h1>Name of your recipe is ${recipeInput}.</h1>`

let recipeIngredients = parseInt(prompt("Please enter how many ingredients do you need for the recipe"));
if (!isNaN(recipeIngredients)) {
    myDiv.innerHTML += `<h2>You need ${recipeIngredients} ingredients.</h2>`
} else {
    myDiv.innerHTML += `<h2>Please enter valid number.</h2>`
}

let ingredients = []

for (let i = 0; i < recipeIngredients; i++) {
    ingredients.push(prompt("Add the name of your ingredients:"));
}

for (let ingredient of ingredients) {
    myDiv.innerHTML += `<li>${ingredient}</li>`;
}