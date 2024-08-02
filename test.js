const { add } = require("./Stringcal");

// Test for custom delimiters
console.log("Test: empty string");
console.log(add(""));

console.log("Test: single number");
console.log(add("1"));

// Test for multiple numbers with commas
console.log("Test: multiple numbers with commas");
console.log(add("1,2")); // Expected output: 3

// Test for new lines
console.log("Test: numbers separated by new lines");
console.log(add("1\n2,3,4")); // Expected output: 6

console.log("Test: custom delimiter");
console.log(add("//;\n1;2")); // Expected output: 3
