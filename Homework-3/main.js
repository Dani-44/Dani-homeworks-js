//Chinese Zodiac with switch

const year = Number(prompt('Enter your birth year'));

    switch ((year - 4) % 12) {
        case 0:
            console.log('Rat');
            break;
        case 1:
            console.log("Ox");
            break;
        case 2:
            console.log("Tiger");
            break;
        case 3:
            console.log("Rabbit");
            break;
        case 4:
            console.log("Dragon");
            break;
        case 5:
            console.log("Snake");
            break;
        case 6:
            console.log("Horse");
            break;
        case 7:
            console.log("Goat");
            break;
        case 8:
            console.log("Monkey");
            break;
        case 9:
            console.log("Rooster");
            break;
        case 10:
            console.log("Dog");
            break;
        case 11:
            console.log("Pig");
            break;
        default:
            console.log("Please enter a valid input !!!");
            break;
    }

 // HOMEWORK Part 1

function detectTypeOf (value) {
    if (
        typeof value === "object" || 
        typeof value === "boolean" ||
        typeof value === "number" ||
        typeof value === "string" ||
        typeof value === "undefined"
        )
    return typeof value;
}

console.log(detectTypeOf(32));
console.log(detectTypeOf("Dani"));
console.log(detectTypeOf(true));
console.log(detectTypeOf(null));
console.log(detectTypeOf());


 // HOMEWORK Part 2

function convertYears (year, conversionType) {
   
    if (Number.isNaN(year)) {
        return "Invalid input";
    }

    if (conversionType !== "h2d" && conversionType !== "d2h") {
        return "Invalid input";
    }

    if (conversionType === "h2d") {
        const result = (year * 7);
        return result
    }

    if (conversionType === "d2h") {
        const result = (year / 7);
        return result
    }
}

    const yearInput = Number(prompt("Please enter years:"));
    const convertType = prompt("Enter H2D or D2H").toLowerCase();

    const convertedYears = convertYears(yearInput,convertType);
    console.log(convertedYears);


    // HOMEWORK Part 3

function withdrawlMoney (amount) {
        const balance = 2000;

    if (Number.isNaN(amount)) {
         return "Invalid input";
    }

    if (amount > balance) {
        return "Not enough money";
    }

    if (amount < balance) {
        const result = (balance - amount);
        return result
    }
}

    const amountInput = Number(prompt("Please enter the amount you want to withdraw:"))
    const yourWithdraw = withdrawlMoney(amountInput)

    console.log(`The amount of money you want to withdraw is ${amountInput}`)
    console.log (`${yourWithdraw} on your balance`)