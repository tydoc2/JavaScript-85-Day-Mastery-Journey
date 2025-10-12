// ========== DAY 4: STRINGS ==========

// Exercise 7: String Reverse
console.log("\nExercise 7: Reverse String");
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));  // "olleh"

// Exercise 8: Character Counter
console.log("\nExercise 8: Count Characters");
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}
console.log(countChar("hello", "l"));  // 2
console.log(countChar("JavaScript", "a"));  // 2

// Exercise 9: String Methods Practice
console.log("\nExercise 9: String Methods");
let text = "JavaScript is Amazing";
console.log(text.length);              // 21
console.log(text.toUpperCase());       // "JAVASCRIPT IS AMAZING"
console.log(text.toLowerCase());       // "javascript is amazing"
console.log(text.slice(0, 10));        // "JavaScript"
console.log(text.substring(4, 10));    // "Script"
console.log(text.charAt(0));           // "J"
console.log(text.indexOf("is"));       // 11
console.log(text.includes("Amazing")); // true

// Exercise 10: Template Literals
console.log("\nExercise 10: Template Literals");
function createProfile(name, age, city) {
    return `Name: ${name}
Age: ${age}
City: ${city}
Year of Birth: ${2024 - age}`;
}
console.log(createProfile("John", 25, "New York"));
