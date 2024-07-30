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
console.log(factorialCalci(5, 1));
console.log(factorialCalci(7, 1));

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
console.log(fibonacciCalc(7, 0));
