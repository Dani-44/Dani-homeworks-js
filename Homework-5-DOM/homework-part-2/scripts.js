// HOMEWEORK PART 2

let numbers = [4, 6, 8, 2, 3, 5]

let resultDiv = document.querySelector(".class")

resultDiv.innerHTML = "";

for (let number of numbers) {
  resultDiv.innerHTML += `<li>${number}</li>`;
}

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

const sumArray = sum(numbers);

resultDiv.innerHTML += (`This is the result ${sumArray}`);

// BONUS

let bonusDiv = document.querySelector(".bonus");

bonusDiv.innerHTML += `${numbers[0]} + ${numbers[1]} + ${numbers[2]} + ${numbers[3]} + ${numbers[4]} + ${numbers[5]} = ${sumArray}`;
