// Arithmetic Operations :-
// Task 1 to 5:-
const a = 2;
const b = 7;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Task 6 - 7 :-
// console.log((a += 2));
// console.log((a -= 2));
//  It gave error, because "a" is a constant
let c = 8;
// let d = 8;
console.log((c += 2)); // Now c's value also becomes c = c + 2 => c = 8 + 2 = 10
console.log((c -= 2)); // Now, c = c - 2 => c = 10 - 2 = 8

// task 8 to 10 :-
// Output
console.log(5 > 3); // True
console.log(5 < 3); // False
console.log(5 >= 3); // True
console.log(4 <= 3); // False
// Difference in between "==" and "==="
// == checks for equality of value, allowing type conversion.
// === checks for equality of both value and type, without allowing type conversion.
console.log(5 == "5"); // True
console.log(5 === "5"); // False
// Why? -> Ans:-  Here, 5 (number) and '5' (string) are not considered equal because === checks both value and type, and they are different types.
// And:- Here, 5 (number) and '5' (string) are considered equal because == converts the string '5' to the number 5 before comparing.
// NOTE Yes, == performs implicit type conversion (also known as type coercion) when comparing two values. This means that it tries to convert the values to a common type before making the comparison.
console.log(5 + "5"); // 55
console.log("5" + 5); // 55
console.log("5" - 5); // 0 | Also, with other operators {*, /, and %} it converts string "5" to number 5

// Tasks 11 to 13 :- Use of "&&" "||" and "!"
console.log(true && true); //true
console.log(true && false); //false
console.log(true || true); //true
console.log(true || false); //true
// Concept :- && -> gives true only if both are true, else false while || -> gives true even if one of them is true.
console.log(!true); // Syntax is "! of something"

// Task 14 :-
let someNum = -32;
console.log(
  someNum >= 0
    ? someNum === 0
      ? console.log("zero")
      : console.log("positive")
    : console.log("negative")
);
// Output :-
// negative
// undefined
// NOTE The extra undefined is logged because console.log returns undefined. When you nest console.log statements within the ternary operator, the return value of console.log (which is undefined) is being passed up the chain and ultimately logged by the outer console.log.
// Ternary Operator :- {so, is it that ternary operator technically returns what we code after ":" and "?"} -> Yes, the ternary operator in JavaScript returns the value of the expression after the : or the ? based on the condition.
// So, to console-log only needed stuff, we can write the code as follows:-

let result =
  someNum >= 0
    ? someNum === 0
      ? "zero" // Will return string "zero"
      : "positive" // Will return string "positive"
    : "negative"; // Will return string "negative"

console.log(result); // This will only log "negative"

// NOTE :- When using the ternary operator in JavaScript, once a condition is satisfied and the corresponding expression is evaluated, the other conditions and expressions are not checked or executed. This means the ternary operator stops evaluating further once it finds a match.

// Feature Request:- Satisfied!!
