// ========== DAY 3: NUMBERS & MATH ==========

// Exercise 4: Simple Calculator
console.log("\nExercise 4: Calculator");
function calculator(num1, num2, operation) {
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, '+'));   // 15
console.log(calculator(10, 5, '-'));   // 5
console.log(calculator(10, 5, '*'));   // 50
console.log(calculator(10, 5, '/'));   // 2
console.log(calculator(10, 3, '%'));   // 1
console.log(calculator(2, 3, '**'));   // 8

// Exercise 5: Random Number Generator
console.log("\nExercise 5: Random Numbers");
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random number 1-100:", randomInt(1, 100));
console.log("Random dice roll:", randomInt(1, 6));

// Exercise 6: Number Methods
console.log("\nExercise 6: Number Methods");
let decimal = 3.14159;
console.log(decimal.toFixed(2));        // "3.14"
console.log(parseInt("100px"));         // 100
console.log(parseFloat("3.14abc"));     // 3.14
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(10.5));    // false
