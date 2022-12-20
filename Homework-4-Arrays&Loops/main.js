// Homework 1

const storyArray = ["Dani", "excelent", "active"];
const names = storyArray[0];
const moods = storyArray[1];
const activitys = storyArray[2];

function tellStory(name, mood, activity) {
    let result = (`This is ${names}. ${names} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`)
    if (name === "Dani" && mood === "excelent" && activity === "active") {
        return result
    }
}
console.log (tellStory(names, moods, activitys));

// Homework 2

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        let addIndex = array[i];
        total += addIndex
    }
    return total;
}

const sumArray = sum([1, 2, 3, 4, 5]);
console.log(sumArray);

console.log("------------------------------");

// Homework 3

const stringArray = ["Hello", "there", "students", "of", "SEDC", "!"]

function stringFunction(array) {
    return array.join(" ");
}
console.log(stringFunction(stringArray));

console.log("------------------------------");

// Homework 4

let counter = 0;
for (let counter = 1; counter <= 20; counter++) {
    console.log(counter);
}

console.log("------------------------------");

// Homework 5

const numberArray = [2, -4, 1, 5, 24, 10, 7, 16];

function sumOfMinAndMax(arr) {
    let max = -Infinity
    let min = +Infinity
    let sum = 0
    for (let num of arr) {
        if (num >= max) {
            max = num
        }
        if (num <= min) {
            min = num
        }
    }
    return sum = max + min
}

console.log(sumOfMinAndMax(numberArray))

console.log("------------------------------");

// Homework 6 - nesto se machev so ovaa i reshiv vaka da ja pratam, pa da mi kazete kade e greshkata :)

const firstNameArray = ["Bob", "Jill"]
const lastNameArray = ["Gregory", "Wurtz"]

function fullNames (names, surnames) {
    for (let i = 0; i < firstNameArray.length; i++) {
        return result = `${names} ${surnames}`
    }
}

console.log(fullNames(firstNameArray, lastNameArray))