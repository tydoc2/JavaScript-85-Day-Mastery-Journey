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
