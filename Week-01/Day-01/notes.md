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
