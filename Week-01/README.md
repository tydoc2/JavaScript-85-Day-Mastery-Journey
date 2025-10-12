# JavaScript Week 1: Complete A-Z Interview Guide

## DAY 1: Getting Started & First Program

### Core Concepts
- **JavaScript Runtime**: JS runs in browsers (V8, SpiderMonkey) and Node.js
- **console.log()**: Outputs data to console
- **Execution Context**: How JS code is executed line by line

### Setup Checklist
```javascript
// Verify Node.js installation
node --version  // Should show v14+ 

// First program
console.log("Hello, World!");
```

### Interview Questions (Day 1)

**Q1: What's the difference between `console.log()`, `console.warn()`, and `console.error()`?**
```javascript
console.log("Info message");      // Standard output (black/white)
console.warn("Warning message");  // Yellow warning icon
console.error("Error message");   // Red error icon
```
**Answer**: All output to console but with different severity levels and styling. Used for debugging.

**Q2: Can you use console.log() in production code?**
**Answer**: No, console statements should be removed or disabled in production as they:
- Impact performance
- Expose sensitive information
- Clutter browser console

**Q3: What happens when you console.log an object?**
```javascript
let obj = { name: "John" };
console.log(obj);  // Shows object structure
obj.name = "Jane";
// Console shows updated value (live reference)
```

### Tricky Questions

**T1: Predict the output:**
```javascript
console.log("1" + 1);      // "11"
console.log(1 + "1");      // "11"
console.log(1 + 1 + "1");  // "21"
console.log("1" + 1 + 1);  // "111"
```

**T2: What gets logged?**
```javascript
console.log(typeof console.log());  // "undefined"
// console.log() returns undefined
```

---

## DAY 2: Variables & Data Types

### Core Concepts

**Variable Declarations:**
```javascript
var x = 10;      // Function-scoped, can redeclare
let y = 20;      // Block-scoped, cannot redeclare
const z = 30;    // Block-scoped, cannot reassign
```

**Primitive Data Types:**
1. **String**: `"text"`, `'text'`, `` `text` ``
2. **Number**: `42`, `3.14`, `NaN`, `Infinity`
3. **Boolean**: `true`, `false`
4. **Undefined**: Variable declared but not assigned
5. **Null**: Intentional absence of value
6. **Symbol** (ES6): Unique identifier
7. **BigInt** (ES11): Large integers

### Interview Questions (Day 2)

**Q1: What's the difference between var, let, and const?**
```javascript
// var - function scoped
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (accessible)
}

// let - block scoped
function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y);  // ReferenceError
}

// const - cannot reassign
const PI = 3.14;
PI = 3.14159;  // TypeError
```

**Q2: What is hoisting?**
```javascript
console.log(a);  // undefined (var is hoisted)
var a = 5;

console.log(b);  // ReferenceError (let not initialized)
let b = 10;
```
**Answer**: Variables are moved to top of scope during compilation. `var` is initialized as undefined, `let/const` are in temporal dead zone.

**Q3: Difference between undefined and null?**
```javascript
let a;
console.log(a);              // undefined
console.log(typeof a);       // "undefined"

let b = null;
console.log(b);              // null
console.log(typeof b);       // "object" (known bug)
```
**Answer**: 
- `undefined`: Variable declared but not assigned
- `null`: Intentionally empty value (assigned by programmer)

### Tricky Questions

**T1: Predict output:**
```javascript
var x = 1;
var x = 2;
console.log(x);  // 2 (var allows redeclaration)

let y = 1;
let y = 2;  // SyntaxError: Identifier 'y' has already been declared
```

**T2: What happens here?**
```javascript
const obj = { name: "John" };
obj.name = "Jane";     // Works!
obj = { name: "Bob" }; // TypeError

// const prevents reassignment, not mutation
```

**T3: Guess the output:**
```javascript
console.log(typeof null);           // "object"
console.log(typeof undefined);      // "undefined"
console.log(typeof NaN);            // "number"
console.log(null == undefined);     // true
console.log(null === undefined);    // false
```

---

## DAY 3: Numbers & Math

### Core Concepts

**Number Operations:**
```javascript
let x = 10;
let y = 3;

console.log(x + y);   // 13
console.log(x - y);   // 7
console.log(x * y);   // 30
console.log(x / y);   // 3.333...
console.log(x % y);   // 1 (remainder)
console.log(x ** y);  // 1000 (exponentiation)
```

**Math Object:**
```javascript
Math.PI;              // 3.141592653589793
Math.round(4.7);      // 5
Math.ceil(4.1);       // 5
Math.floor(4.9);      // 4
Math.abs(-10);        // 10
Math.sqrt(16);        // 4
Math.pow(2, 3);       // 8
Math.min(1, 2, 3);    // 1
Math.max(1, 2, 3);    // 3
Math.random();        // 0 to 1 (exclusive)
```

### Interview Questions (Day 3)

**Q1: How to generate random number between min and max?**
```javascript
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(1, 10));  // Random between 1-10
```

**Q2: What is NaN and how to check for it?**
```javascript
console.log(0 / 0);           // NaN
console.log(parseInt("abc")); // NaN
console.log(NaN === NaN);     // false!

// Correct way to check
console.log(isNaN(NaN));           // true
console.log(Number.isNaN(NaN));    // true (better)
```

**Q3: Difference between parseInt and parseFloat?**
```javascript
parseInt("10.5");       // 10
parseFloat("10.5");     // 10.5
parseInt("10px");       // 10
parseInt("px10");       // NaN
parseInt("1010", 2);    // 10 (binary to decimal)
```

**Q4: What is the precision issue with decimals?**
```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false!

// Solution:
console.log((0.1 + 0.2).toFixed(1));  // "0.3"
console.log(Math.round((0.1 + 0.2) * 10) / 10);  // 0.3
```

### Tricky Questions

**T1: Predict output:**
```javascript
console.log(typeof NaN);        // "number"
console.log(NaN === NaN);       // false
console.log(isNaN("hello"));    // true
console.log(Number.isNaN("hello"));  // false
```

**T2: What's the difference?**
```javascript
console.log(isNaN("123"));         // false (converts to number)
console.log(Number.isNaN("123"));  // false (doesn't convert)
console.log(isNaN("abc"));         // true
console.log(Number.isNaN("abc")); // false (not NaN type)
```

**T3: Guess output:**
```javascript
console.log(Infinity + 1);      // Infinity
console.log(Infinity - Infinity); // NaN
console.log(1 / 0);              // Infinity
console.log(-1 / 0);             // -Infinity
console.log(0 / 0);              // NaN
```

**T4: Rounding challenge:**
```javascript
console.log(Math.round(2.5));   // 3
console.log(Math.round(-2.5));  // -2 (not -3!)
console.log((2.5).toFixed(0));  // "3"
console.log((2.55).toFixed(1)); // "2.5" (precision issue!)
```

---

## DAY 4: Strings

### Core Concepts

**String Creation:**
```javascript
let str1 = "Hello";           // Double quotes
let str2 = 'World';           // Single quotes
let str3 = `Template ${str1}`; // Template literal
```

**String Methods:**
```javascript
let text = "JavaScript";

text.length;              // 10
text[0];                  // "J"
text.charAt(0);           // "J"
text.toUpperCase();       // "JAVASCRIPT"
text.toLowerCase();       // "javascript"
text.slice(0, 4);         // "Java"
text.substring(0, 4);     // "Java"
text.substr(0, 4);        // "Java" (deprecated)
```

### Interview Questions (Day 4)

**Q1: Difference between slice, substring, and substr?**
```javascript
let str = "JavaScript";

// slice(start, end) - supports negative indices
str.slice(0, 4);      // "Java"
str.slice(-6);        // "Script"
str.slice(-6, -1);    // "Scrip"

// substring(start, end) - no negative, swaps if start > end
str.substring(0, 4);  // "Java"
str.substring(4, 0);  // "Java" (swapped)
str.substring(-3);    // "JavaScript" (treats negative as 0)

// substr(start, length) - DEPRECATED
str.substr(0, 4);     // "Java"
```

**Q2: How to reverse a string?**
```javascript
// Method 1: Array methods
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);  // "olleh"

// Method 2: Loop
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
```

**Q3: Are strings mutable in JavaScript?**
```javascript
let str = "Hello";
str[0] = "h";
console.log(str);  // "Hello" (unchanged)

// Strings are immutable
str = str.replace("H", "h");  // Creates new string
console.log(str);  // "hello"
```

**Q4: Template literals vs concatenation?**
```javascript
let name = "John";
let age = 30;

// Concatenation
let msg1 = "Hello, " + name + ". You are " + age + " years old.";

// Template literal (better)
let msg2 = `Hello, ${name}. You are ${age} years old.`;

// Multi-line
let multi = `Line 1
Line 2
Line 3`;
```

### Tricky Questions

**T1: Predict output:**
```javascript
console.log("5" + 3);      // "53"
console.log("5" - 3);      // 2
console.log("5" * "2");    // 10
console.log("abc" - 1);    // NaN
```

**T2: String comparison:**
```javascript
console.log("a" < "b");        // true
console.log("abc" < "abd");    // true
console.log("A" < "a");        // true (uppercase < lowercase)
console.log("10" < "9");       // true (string comparison!)
```

**T3: What gets logged?**
```javascript
let str = "   hello   ";
console.log(str.length);        // 13
console.log(str.trim().length); // 5
console.log(str.length);        // 13 (original unchanged)
```

---

## DAY 5: More String Methods

### Core Concepts

**Advanced String Methods:**
```javascript
let text = "JavaScript is awesome";

// Split & Join
text.split(" ");          // ["JavaScript", "is", "awesome"]
["a", "b", "c"].join("-"); // "a-b-c"

// Search methods
text.includes("Java");    // true
text.startsWith("Java");  // true
text.endsWith("some");    // true
text.indexOf("is");       // 11
text.lastIndexOf("a");    // 18
text.search(/is/);        // 11

// Replace
text.replace("awesome", "great");     // First occurrence
text.replaceAll("a", "@");            // All occurrences (ES12)

// Trim
"  hello  ".trim();       // "hello"
"  hello  ".trimStart();  // "hello  "
"  hello  ".trimEnd();    // "  hello"
```

### Interview Questions (Day 5)

**Q1: How to count word occurrences?**
```javascript
function countWords(str) {
    let words = str.trim().split(/\s+/);
    return words.length;
}
console.log(countWords("Hello   world   test")); // 3
```

**Q2: Difference between indexOf and search?**
```javascript
let str = "JavaScript";

// indexOf - simple search, no regex
str.indexOf("Script");    // 4
str.indexOf("Python");    // -1

// search - supports regex
str.search(/script/i);    // 4 (case insensitive)
str.search("Python");     // -1
```

**Q3: How to replace all occurrences before ES12?**
```javascript
let str = "cat cat cat";

// Before ES12
str.replace(/cat/g, "dog");  // "dog dog dog"
str.split("cat").join("dog"); // "dog dog dog"

// ES12+
str.replaceAll("cat", "dog"); // "dog dog dog"
```

**Q4: Check if string is palindrome?**
```javascript
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

### Tricky Questions

**T1: Split edge cases:**
```javascript
console.log("".split(""));        // []
console.log("abc".split(""));     // ["a", "b", "c"]
console.log("a,b,c".split(","));  // ["a", "b", "c"]
console.log("a,b,c".split(""));   // ["a", ",", "b", ",", "c"]
```

**T2: Replace behavior:**
```javascript
let str = "test test test";
console.log(str.replace("test", "X"));    // "X test test"
console.log(str.replace(/test/g, "X"));   // "X X X"
console.log(str.replaceAll("test", "X")); // "X X X"
```

**T3: Trim variations:**
```javascript
let str = "  \n  hello  \t  ";
console.log(str.trim());       // "hello"
console.log(str.trimStart());  // "hello  \t  "
console.log(str.trimEnd());    // "  \n  hello"
```

### Top 14 Week 1 Interview Questions

1. **Difference between var, let, and const**
2. **What is hoisting?**
3. **Difference between == and ===**
4. **What are truthy and falsy values?**
5. **Difference between null and undefined**
6. **What is NaN and how to check for it?**
7. **How to reverse a string?**
8. **Difference between slice and substring**
9. **Explain template literals**
10. **How to generate random numbers?**
11. **What are string methods?**
12. **Difference between parseInt and parseFloat**
13. **What is the Math object?**
14. **How to check if a string is a palindrome?**

### Practice Exercises

1. Console Practice
2. Variable Practice
3. Variable Scope Challenge
4. Simple Calculator
5. Random Number Generator
6. Number Methods
7. String Reverse
8. Character Counter
9. String Methods Practice
10. Template Literals
11. Word Counter
12. Find & Replace
13. Check Palindrome
14. Extract Initials
15. String Validation

### Resources

**Official Documentation:**
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- JavaScript.info: https://javascript.info/

**Common Mistakes to Avoid:**
1. Using var instead of let/const
2. Not using strict equality (===)
3. Forgetting string immutability
4. Ignoring floating-point precision
5. Not handling NaN properly
6. Confusing assignment (=) with comparison (==)
