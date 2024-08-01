// Task-1
function factorialCalci(num, prod) {
  // let prod = 1;
  // Base Condition:-
  if (num == 0 || num == 1) {
    return prod;
  }
  // What to do in this iteration:-
  prod = prod * num;
  // How to go in the next iteration
  return factorialCalci(num - 1, prod);
}
// console.log(factorialCalci(5, 1));
// console.log(factorialCalci(7, 1));

// Task-2
function fibonacciCalc(num, sum) {
  // Base Conditions
  if (num == 1) {
    return 0;
  }
  if (num == 2) {
    return 1;
  }
  // What to do:-
  sum = fibonacciCalc(num - 1, sum) + fibonacciCalc(num - 2, sum);
  return sum;
}
// console.log(fibonacciCalc(7, 0));

// Task-3
function arrSumCalci(arr, sum, start, end) {
  if (start > end) {
    return sum;
  }
  sum = sum + arr[start];
  return arrSumCalci(arr, sum, ++start, end);
  // Here we could not write start++ bcoz; "start++ passes the current value of start to the function, and then increments start. Therefore, start doesn't change between recursive calls."
}
let arrOne = [23, 12, 43];
console.log(arrSumCalci(arrOne, 0, 0, arrOne.length - 1));

// Task-4
let arrTwo = [23231, 76, 540, 3112, 87];
function arrMaxCalc(arr, max, start, end) {
  if (start > end) {
    return max;
  }
  if (arr[start] > max) {
    max = arr[start];
  }
  return arrMaxCalc(arr, max, ++start, end);
}
console.log(arrMaxCalc(arrTwo, arrTwo[0], 1, arrTwo.length - 1));

// Task-5
function reversingOfString(arr, start, end) {
  if (start >= end) {
    // It can't be done "(start == end)"
    return;
  }
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  return reversingOfString(arr, ++start, --end);
}
let arrThree = "Having".split("");
reversingOfString(arrThree, 0, arrThree.length - 1);
let reversedString = arrThree.join("");
console.log(reversedString);

// Task-6
function palindromeChecker(arr, start, end) {
  // base condition.
  if (start >= end) {
    // It can't be done "(start == end)"
    return true;
  }
  // What to do in this iteration
  if (arr[start] != arr[end]) {
    return false;
  }
  // How to go to next iteration
  return palindromeChecker(arr, ++start, --end);
}
let arrFour = "madam".split("");
// console.log(palindromeChecker(arrFour, 0, arrFour.length - 1));
// let reversedStringTwo = arrFour.join("");
// console.log(reversedStringTwo);
