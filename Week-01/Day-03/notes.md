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
