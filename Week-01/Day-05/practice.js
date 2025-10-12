// ========== DAY 5: MORE STRING METHODS ==========

// Exercise 11: Word Counter
console.log("\nExercise 11: Word Counter");
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world from JavaScript"));  // 4
console.log(countWords("  Multiple   spaces   here  "));  // 3

// Exercise 12: Find & Replace
console.log("\nExercise 12: Replace Words");
function replaceWord(sentence, oldWord, newWord) {
    return sentence.split(oldWord).join(newWord);
}
console.log(replaceWord("I love Java", "Java", "JavaScript"));

// Exercise 13: Check Palindrome
console.log("\nExercise 13: Palindrome Checker");
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));              // true
console.log(isPalindrome("hello"));                // false
console.log(isPalindrome("A man a plan a canal Panama"));  // true

// Exercise 14: Extract Initials
console.log("\nExercise 14: Get Initials");
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
}
console.log(getInitials("john doe smith"));  // "JDS"

// Exercise 15: String Validation
console.log("\nExercise 15: Email Validation");
function isValidEmail(email) {
    return email.includes('@') && 
           email.includes('.') && 
           email.indexOf('@') < email.lastIndexOf('.');
}
console.log(isValidEmail("test@example.com"));  // true
console.log(isValidEmail("invalid.email"));     // false
