// ========== DAY 2: VARIABLES & DATA TYPES ==========

// Exercise 2: Variable Practice
console.log("\nExercise 2: Variables");
let firstName = "John";
let age = 25;
let isStudent = true;
let salary = undefined;
let bonus = null;

console.log(typeof firstName);  // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof salary);     // undefined
console.log(typeof bonus);      // object (bug in JS)

// Exercise 3: Variable Scope Challenge
console.log("\nExercise 3: Scope");
function scopeTest() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x);  // 10 (var is function-scoped)
    // console.log(y);  // ReferenceError
    // console.log(z);  // ReferenceError
}
scopeTest();