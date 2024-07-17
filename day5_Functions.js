// Task-1
function checkForEvenOrOdd(num) {
  if (num % 2 == 0) return "even";
  else return "odd";
}
let result = checkForEvenOrOdd(34);
console.log(result);
console.log(checkForEvenOrOdd(3));
// As you can see, both the syntaxes are correct!!

// Task-2
function squareCalculator(num) {
  return num * num;
}
console.log(squareCalculator(4));

// Prior to Task-3
// NOTE :- VVI -> Difference in between "function declaration" and "function scope" :-
// Function Declaration:-
// A function declaration defines a named function that can be invoked anywhere within its scope (including before the declaration due to hoisting).
// Where as;
// Function Expression:-
// A function expression defines a function as part of a larger expression syntax (such as an assignment or a return statement). It can be named or anonymous.

// NOTE :- Def'n of Hoisting;
// Hoisting is a JavaScript mechanism where variables and function declarations are moved (or "hoisted") to the top of their containing scope during the compile phase, before the code is executed. This means that you can use variables and functions before you declare them in your code.

// Function Declaration Eg:-
// Hoisting: Function declarations are hoisted to the top of their containing scope, which means they can be called before they are defined in the code.
console.log(greet("Bob")); // Output: Hello, Bob! => Works, even before function declaration!!
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression Eg:-
// Hoisting: Function expressions are not hoisted. They are only available after the expression is evaluated.
// Function Expression (Anonymous);
const tellHello = function (name) {
  return "Hello, " + name + "!";
};
console.log(tellHello("Harsh")); // Output: Hello, Alice!
// Named Function Expression;
const sayHello = function greetFunction(name) {
  return "Hello, " + name + "!";
};
console.log(sayHello("Sahil")); // Output: Hello, Alice!

// Task-3
const maxOfTwoNums = function (num1, num2) {
  if (num1 >= num2) return num1;
  else return num2;
};
console.log(maxOfTwoNums(9, 6));

// Task-4
const concatenateTwoStrings = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenateTwoStrings("Hello", " _ World, I'm M1."));

// Task-5
const sumOfTwoNums = (num1, num2) => {
  return num1 + num2;
};
console.log(sumOfTwoNums(2, 3));
// NOTE:-
// Q -> {Is it true that arrow functions can only be defined using "function expression" and not using "function declaration" method?}
// A -> Yes, that is true. Arrow functions in JavaScript can only be defined using function expressions and not function declarations. Arrow functions are always anonymous and cannot be named like function declarations.

// Task-6
const checkForY = (str) => {
  str.forEach((element) => {
    if (element === "Y" || element === "y") return true;
  });
  return false;
};
// console.log(checkForY("Hola"));
// This code is generating error!!
// Can't use "ForEach here!!!"
// Reason :- The issue with the function checkForY is that it uses forEach to iterate over the string, but forEach
// is an array method and not directly applicable to strings. Additionally, the "return true" inside the forEach callback
// does not exit the outer function but just exits the current iteration of the forEach loop.
const checkForT = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "t" || str[i] === "T") {
      return true;
    }
  }
  return false;
};
console.log(checkForT("constant"));

// Task-7
function prodOfTwoNums(num1, num2 = 5) {
  return num1 * num2;
}
console.log(prodOfTwoNums(3, 4));
// NOTE :- "Funda of default parameters" ;
// It is a common practice to place default parameters at the end of the parameter list.
// This is because if you want to pass only one argument and use the default value for the
// other parameter, the parameter with the default value "should come after" the one without a default value.

// Task-8
// const greetingsToUser = (name, age = 18) => {
//   if (age) {
//     return "Hello " + name + "! You are " + age + " years old!";
//   } else {
//     return "Hello " + name + "! You must be " + age + " years old, right?";
//   }
// };
// NOTE :-
// To achieve the desired behavior where the else block runs if the age argument
// is not provided, you should differentiate between whether age is explicitly provided
// or not. Since age has a default value, the condition if (age) will always evaluate to
// true when age is not provided (because it defaults to 18).
// Corrected code;
const greetingsToUser = (name, age) => {
  if (age) {
    return "Hello " + name + "! You are " + age + " years old!";
  } else {
    return "Hello " + name + "! You must be 18 years old, right?";
  }
};
console.log(greetingsToUser("Rahul", 33));

// Task-9
const greetingMultipleTimes = (fxn, n) => {
  for (let i = 1; i <= n; i++) {
    console.log(fxn("Lara"));
  }
};
greetingMultipleTimes(greet, 5);

// Task-10

function cubeCalculator(val) {
  return val * val * val;
}

// We declared "squareCalculator" above!!

function higherOrderFxn(fxn1, fxn2, value) {
  let result = fxn1(value);
  return fxn2(result);
}

console.log(higherOrderFxn(squareCalculator, cubeCalculator, 2));
// 2 -> squared => 4 -> cubed => 64
