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
