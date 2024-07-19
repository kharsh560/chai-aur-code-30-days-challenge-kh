// Task-1
// Object creation in JS -> There are many methods, but I've noted 3 methods. See Notes! {part-> 4 & 15}
const bookInfo = {
  title: "Jungle Book",
  author: "Harry",
  year: "2000",
};
console.log(bookInfo);

// Task-2
console.log(`Book's title : ${bookInfo.title} 
Book's author : ${bookInfo.author}`);

// Task-3
bookInfo.returnTitleAndAuthor = function () {
  return `Book's title: ${this.title} and Book's Year: ${this.year}!`;
};
console.log(bookInfo.returnTitleAndAuthor());
// NOTE: VVI) Same thing when I did with arrow function, it logged "undefined" in place of this.title and this.author. Why?
// Ans: The reason you're getting undefined when using an arrow function to access this.title and this.author is that arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical context at the time they are defined. This means that if you use an arrow function as a method within an object, this will not refer to the object itself.

// Task-4
bookInfo.updateBookYear = function (newYear) {
  this.year = newYear;
};
bookInfo.updateBookYear(2010);
console.log(bookInfo);

// By me:-
bookInfo.genere = "Horror";
console.log(bookInfo);
// Note:
// {Doubt} When you type bookInfo. in VS Code, it might only show title, author, and year in the suggestions, and not getBookDetails.
// {Reason} VS Code relies on static analysis for providing IntelliSense suggestions. This means it analyzes your code based on what it can see without executing it. When properties or methods are added dynamically, they are not visible to the static analysis engine until it re-parses the updated state of the object. Since JavaScript allows for dynamic changes, it can be challenging for static analysis to keep up with every modification in real-time.

// Taks-5
const library = {
  libraryName: "Sukumal Dev Library",
  booksAvailable: [
    (book1 = {
      title: "Jungle Book",
      author: "Harry",
      year: "2000",
    }),
    (book2 = {
      title: "Shit Book",
      author: "nosy",
      year: "2016",
    }),
    (book3 = {
      title: "Once upon a time",
      author: "gulzar",
      year: "2019",
    }),
  ],
};
console.log(library);
console.log(library.libraryName);
library.booksAvailable.forEach((eachBook) => {
  console.log(eachBook.title);
});

// Task-7
bookInfo.printBookDetails = function () {
  return `Book's Title: ${this.title} | Book's Author: ${this.author} | Book's year of publication: ${this.year}. Thankyou!`;
};
console.log(bookInfo.printBookDetails());
console.log("############################################################");

// Task-8
// for...in Loops in JS -> See my onenote's part_8 {or} L29 of chai aur JS
for (const iterator in bookInfo) {
  // console.log(`key: ${iterator} -> value: ${bookInfo[iterator]}`);
  console.log(iterator);
}
// The "iterator" in "for...in" takes the "key" of object in every iteration.

console.log("############################################################");

// Task-9
// NOTE: VVVI) JavaScript arrays can store values from all the data types!!
console.log("The object:-");
console.log(bookInfo);
console.log("############################################################");
const bookInfoKeys = Object.keys(bookInfo);
// console.log(typeof bookInfoKeys);
console.log("The array of keys:-");
console.log(bookInfoKeys);
console.log("############################################################");
const bookInfoValues = Object.values(bookInfo);
// console.log(typeof bookInfoValues);
console.log("The array of values:-");
console.log(bookInfoValues);
console.log("############################################################");
const bookInfoKeyValues = Object.entries(bookInfo);
// console.log(typeof bookInfoKeyValues);
console.log("The array of array of keys + values:-");
console.log(bookInfoKeyValues);

// By me:-
// For...in & For...of loops on arrays:-
let arrNum = [32, 65, 123, 76];
for (const iterator in arrNum) {
  //   console.log(`key: ${key} -> value: ${arrNum[key]}`);
  console.log(iterator);
}
// The "iterator" in "for...in" takes the "key" of array in every iteration.
for (const iterator of arrNum) {
  console.log(iterator);
}
// The "iterator" in "for...of" takes the "value" of array in every iteration.

// By me:-
// Using for...of loop on bookInfo
// for (const i of bookInfo) {
//     console.log(i);
// } => Will get error. Bcoz:- "bookInfo is not iterable"
