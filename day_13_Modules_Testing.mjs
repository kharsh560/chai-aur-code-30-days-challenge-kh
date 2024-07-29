// When importing named exports, you must use curly braces {} to specify the exact name of the export you want to import.
// import configuration, { add as sum, subtract as minus } from './day_13_Modules';
// const configuration = require("./day_13_Modules");

// console.log(sum(4, 3));   
// Output: 7
// console.log(minus(10, 4)); 
// Output: 6
// Getting this error!
// SyntaxError: Cannot use import statement outside a module

// console.log(configuration.apiEndpoint);

// Importing the exported functions using require
// const math = require("./day_13_Modules");

// console.log(math.add(5, 3)); // Output: 8
// console.log(math.subtract(5, 3)); // Output: 2
// // NOTE: Working!!


// Importing the exported functions using import
import { add, subtract } from './math.js';
import multiply from './math.js'; // Importing the default export

console.log(add(5, 3));       // Output: 8
console.log(subtract(5, 3));  // Output: 2
console.log(multiply(5, 3));  // Output: 15

