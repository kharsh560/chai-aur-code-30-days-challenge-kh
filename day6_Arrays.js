// Task-1
let numArr = [1, 2, 3, 4, 5, 23, 6];
console.log(numArr);

// Task-2
console.log(`numArr's first element: ${numArr[0]}
numArr's last element: ${numArr[numArr.length - 1]}`);

// Task-3
numArr.push(69);
console.log(`After pushing 69 to this array:- ${numArr}`);

// NOTE: If we just log "numArr" then it gets logged in a different form, but when its logged within an expression, then it gets logged linearly.

// Task-4
numArr.pop();
console.log(`After popping last element:- ${numArr}`);

// Task-5
// The "shift" operator:-
// In JavaScript, the shift operator is a method used on arrays. The shift method removes the first element from an array and returns that removed element. This method changes the length of the array.
let firstElement = numArr.shift();
console.log(`First element of numArr = ${firstElement}`);
console.log(numArr);

// Task-6
// The "unshift" operator:-
// Its used to add new element at the start of the array.
numArr.unshift(878, 57);
console.log(numArr);

// Task-7
const newNumArr = numArr.map((eachElementOfNumArr) => eachElementOfNumArr * 2);
console.log("Original Array.");
console.log(numArr);
console.log("Manipulated Array.");
console.log(newNumArr);

// Task-8
const evenInNumArr = numArr.filter(
  (eachElementOfNumArr) => eachElementOfNumArr % 2 == 0
);
console.log("Original Array.");
console.log(numArr);
console.log("Manipulated Array.");
console.log(newNumArr);

// Task-9
const sumOfNumArr = numArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumOfNumArr);

// Task-10
// for (let i = 0; i < numArr.length; i++) {
//   console.log(numArr[i]);
// }
// It prints the elements in a verticle line. SO;
let numArrElements = "";
for (let i = 0; i < numArr.length; i++) {
  numArrElements = numArrElements + numArr[i] + ", ";
}
console.log(numArrElements);

// Task-11
let numArrElements2 = "";
numArr.forEach(
  (eachElementOfNumArr) =>
    (numArrElements2 = numArrElements2 + eachElementOfNumArr + "| ")
);
console.log(numArrElements2);

// Task-12
let twoDimensionalArray = [
  [2, 4, 7],
  [65, 32, 98],
  [1, 97, 34],
];
console.log(twoDimensionalArray);
// Making a function to print every element of the array.
twoDimensionalArray.forEach((eachArrayOfTwoDimArray) => {
  let eachArrayOfTwoDimArrayPrinter = "";
  for (let i = 0; i < eachArrayOfTwoDimArray.length; i++) {
    eachArrayOfTwoDimArrayPrinter =
      eachArrayOfTwoDimArrayPrinter + eachArrayOfTwoDimArray[i] + " ";
  }
  console.log(eachArrayOfTwoDimArrayPrinter);
});

// Task-13
console.log(`Element at (2,3) = ${twoDimensionalArray[1][2]}`); // Ofcourse, indexing starts from "0" => So we need to do ((i-1),(j-1))
