// Task / Activities :-
// Activity 1 :-
var number = 25;
console.log(number);
let string = "hello";
console.log(string);

// Activity 2 :-
const bool = true;
console.log(bool);

// Activity 3 :-
var num = 44;
var str = "healow";
// var isLoggedIn = "false";
var isLoggedIn = false;
var user = {
  name: "Kharsh",
  age: "20",
  isLoggedIn,
  move: () => {
    console.log(str);
  },
};
var arr = [44, 53, 42, 45, 12, 76];
console.log(
  `Here are the datatypes of each variable respectively:- num -> ${typeof num}, str -> ${typeof str}, isLoggedIn -> ${typeof isLoggedIn}, user -> ${typeof user}, arr -> ${typeof arr}`
);
// Output :- Here are the datatypes of each variable respectively:- num -> number, str -> string, isLoggedIn -> boolean, user -> object, arr -> object
// But how is this possible? {arr -> object} ?
// NOTE :- In JavaScript, arrays are considered a type of "object" only. This is because JavaScript arrays are objects with special properties and methods that make them suitable for storing ordered collections of values.
// The typeof Operator: When you use the typeof operator on an array, it returns "object" because, under the hood, arrays are a type of object. The typeof operator does not distinguish between different kinds of objects,
// so it returns "object" for arrays, plain objects, functions, and other objects.
// To explicitly check if a variable is an array, you can use Array.isArray():
console.log(Array.isArray(arr)); // Output: true

// Activity 4 :-
let age = 16;
console.log(age);
age = 20;
console.log(age);

// Activity 5 :-
const id = 2234332;
console.log(id);
// id = 223256; ERROR!!
console.log(id);

// Feature Request:-
// {1}
// Solution :- See the variables declared in activity 3, Now just console logging their values and their data types;
console.log(
  `Here are the datatypes of each variable respectively:- 
  num -> ${num} | ${typeof num}, 
  str -> ${str} | ${typeof str}, 
  isLoggedIn -> ${isLoggedIn} | ${typeof isLoggedIn}, 
  user -> ${user} | ${typeof user}, 
  arr -> ${arr} | ${typeof arr}`
);
// OUTPUT :-
// Here are the datatypes of each variable respectively:-
//   num -> 44 | number,
//   str -> healow | string,
//   isLoggedIn -> false | boolean,
//   user -> [object Object] | object,
//   arr -> 44,53,42,45,12,76 | object
// {Q} If user is an object containing number, string, function, boolean etc, then why does it gets logged as "[object Object]" when console logged using the object's name?
// {Ans} When you log an object directly in JavaScript using console.log(user), it prints the object in a readable format. However, when you log the object as part of a string (e.g., using string concatenation or template literals), it gets converted to a string representation. By default, the toString() method of an object returns [object Object].
// So, simply logging "user" :-
console.log(user);

// Feature Request:-
// {2}
// Done in activity 4 & 5
