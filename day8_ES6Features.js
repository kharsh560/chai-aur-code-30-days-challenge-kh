// Task-1 :- Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
// Solution :- Template literals in ES6 (ECMAScript 2015) provide an easy and readable way to embed variables and expressions within strings. You can use two backticks (`) to define a template literal and ${} to embed variables or expressions.
const userName = "Alice";
const age = 30;
const introduction = `My name is ${userName} and I am ${age} years old.`;
console.log(introduction);

// Task-2
// Creating multi-line strings using template literals in JavaScript is straightforward and improves readability. You can use backticks (`) to define a template literal that spans multiple lines.
const multiLineString = `This is a multi-line string.
My name is ${userName}.
I am ${age} years old.`;
console.log(multiLineString);

// NOTE: The use of backticks (`) to define strings is called using template literals, and it is a feature introduced in ECMAScript 6.

// NOTE: Task-3 -> Destructuring
let numArr = [23, 56, 87, 23, 43, 321];
// console.log(...numArr);
// NOTE: No!! Use of "..." is not called Destructuring!
// Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to unpack values from arrays or properties from objects into distinct variables.
// Eg of Array Destructuring:-
const numbers = [1, 2, 3, 4];

// Destructuring assignment
// NOOTE: You can also skip elements or use default values
const [a, b, , d] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(d); // 4

// VVI:- Array destructuring allows you to skip elements using commas,
// but object destructuring doesn't have a direct way to "skip" properties because
// object properties are accessed by name, not by position. However, you can simply not
// include the properties you don't need in your destructuring assignment.

// Task-4
// Eg of object destructuring:-
const book = {
  author: "Alice",
  year: 2015,
  bookName: "Alice in the Wonderland",
};
// Destructuring assignment
const { author: authName, year: yearOfPublication, bookName } = book;

console.log(authName);
console.log(yearOfPublication);
console.log(bookName);

console.log(book); // -> You see, the inherit name of this object's properties is not changed!
// So, we can say that whatever we write while destructuring of object, it basically becomes a variable in which the corresponding prop's value is stored!

// NOTE: A great way to think about the use case of "destructuring":-
// doing destructuring, can we say that it helps make accessing the object's prop's values easy
// by not needing the need  of "." -> Like instead of book.bookName we're using directly "bookName", after
// destructuring the object "book"?
// {Ans} -> Yes, that's a great way to think about it. Destructuring does simplify accessing an object's properties
// by allowing you to directly extract the values you need into variables, thus avoiding repetitive usage of the dot notation.

// Task-5
// NOTE: Spread operator
const numArr2 = [1, 2, 3, 4, 5];
const numArr3 = [...numArr2, 6, 7, 8, 9, 10];
console.log(numArr3);
// About:-
// The method where the spread operator ... is used is called the spread syntax.
// The spread syntax allows an iterable (like an array or string) or an object to be
// expanded in places where zero or more arguments (for function calls) or
// in elements (for array literals) or properties (for object literals) are expected.
// It is also a feature introduced in ES6.

// Can be used with objects also:-
const obj = { a: 1, b: 2 };
const newObj = { ...obj, b: 3, c: 4 };

console.log(newObj); // { a: 1, b: 3, c: 4 }

// Note: {Q} -> If object is spread at the begining or at the end, does it change any thing logically?
// {Ans} -> Yes, the order of spreading an object can change the outcome, especially when properties overlap or have the same key.

// When you spread an object at the beginning, properties that come after the spread can overwrite the properties from the spread object.
// For eg: const newObj = { ...obj, b: 3, c: 4 }; Here, if our motive was to overwrite any of the old object's prop's value, then it will be done here.
// But if we spread the obj at the end, Means like this: const newObj = { b: 3, c: 4, ...obj };
//  then as you can think, the object's prop's old value which is common (prop "b") will be overridden the again by itself and hence will remain same.

// Task-6
// The rest operator is a feature introduced in ES6 (ECMAScript 2015). It allows you to collect
// the remaining elements of an array or the remaining properties of an object into a new array
// or object. The rest operator uses the same syntax as the spread operator (...), but its context
// is different.

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// As I can get, the "...rest" is opposite of "...spread"
// The "...rest" operator takes all the values thrown at it and forms an array/object out of it.

// NOTE: Use of rest operator in case of "function's parameter/arguments" allows us to take "any number of values" we want.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
// NOTE: {Q} So, if the "numbers" is not an array defined in prior, then using it with "..." will make it use as "rest" operator?
// So, yes, if numbers is not defined prior and you use ...numbers in the function
// parameters, it is indeed utilizing the rest operator to collect all provided arguments
// into an array named numbers.
console.log(54, 76, 23, 990, 4);

// Task-7
// Default Parameters:-
// the default parameter feature was introduced in ES6 (ECMAScript 2015). This feature
// allows you to specify default values for function parameters. If no argument is provided
// for a parameter with a default value
function prod(a, b = 1) {
  return a * b;
}

console.log(prod(2, 3));
console.log(prod(2));

// Task-8
// Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// Enhanced object literals are another feature introduced in ES6 that make it easier to define objects with properties
// and methods. They provide a shorthand syntax for defining properties and methods, as well as for using variable names
// as property keys.

const name = "Alice";
const ageInYears = 30;

const person = {
  name, // shorthand property
  ageInYears, // shorthand property
  location: "Wonderland",

  // method definition shorthand
  greet() {
    return `Hello, my name is ${this.name}`;
  },

  // computed property name
  ["ageIn" + 10 + "Years"]() {
    return this.age + 10;
  },
  // This syntax called "computed property name" -> Syntax: "['expression']: value"
};

console.log(person);
console.log(person.greet());
console.log(person.ageIn10Years());

// Task-9:
// Create an object with computed property names based on variables and log the object to the console.
// Discussed above!
// Syntax of "computed property names" :-
// ['expression']: value
// The expression inside the square brackets [] is evaluated, and the result is used as the property name.
// ['ageIn' + 10 + 'Years']() {
//   return this.age + 10;
// }
// => Its equivalent to:-
// ageIn10Years () {
//   return this.age + 10;
// }
