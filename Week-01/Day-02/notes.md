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
