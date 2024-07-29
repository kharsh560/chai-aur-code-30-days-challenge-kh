// In JavaScript, modules are a way to encapsulate and organize code into separate files or units, 
// each of which can export functionality or data that can be reused elsewhere in the application.

// Types of Modules in JS:-
// 1) ES6 Modules (ESM): Introduced in ECMAScript 2015 (ES6), ES modules are now a standard part of the JavaScript language. 
// They use the import and export syntax and are supported natively in modern browsers and Node.js.

// 2) CommonJS Modules (CJS): Primarily used in Node.js, CommonJS modules use require and 
// module.exports syntax. CommonJS was the standard before ES modules became available.

// NOTE: To know more about CJS modules and ES6 modules, see this video:- {https://youtu.be/wCkHbaLG5cw}

// 3) AMD and UMD: These are older module formats. AMD (Asynchronous Module Definition) is mainly 
// used in browser environments, and UMD (Universal Module Definition) is a compromise between AMD and CommonJS.

// Task-1
// Over all there are two types of exports:-
// 1) Named exports
// 2) Default exports


// Exporting functions using "named exports"
// export function add(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// // Exporting variables
// export const pi = 3.14159;

// importing Named Exports
// When importing named exports, you must use curly braces {} to specify the exact name of the export you want to import.
// NOTE: See the code of importing in "testing" file.

// config.js

// const configuration = {
//   apiEndpoint: "https://api.example.com",
//   timeout: 5000,
// };

// export default configuration;


// Exporting functions and variables using module.exports
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// module.exports = {
//   add,
//   subtract,
// };
// NOTE: Working!!


// Exporting functions using named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Exporting a default function
export default function multiply(a, b) {
  return a * b;
}


 
