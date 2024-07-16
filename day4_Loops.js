// Task-1 :-
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task-2

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// Task-3 :-
let n = 1,
  sum = 0;
while (n <= 10) {
  sum = sum + n;
  n++;
}
console.log(sum);

// Task-4

let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

console.log("##################################");

// Task-5 :-
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

console.log("##################################");

// Task-6

let givenNum = 6,
  u = givenNum,
  prod = 1;

if (givenNum == 1 || givenNum == 0) {
  console.log(1);
} else {
  do {
    prod = prod * u;
    u--;
  } while (u >= 1);
}
// 3 => u = 3 -> prod = 1 * 3 -> u = 2 ->prod = 3 * 2 -> u = 1 -> prod = 6 * 1 -> u = 0 => End
console.log(prod);

console.log("##################################");

// Task 7 :-
for (let i = 1; i <= 5; i++) {
  let message = "";
  for (let j = 1; j <= i; j++) {
    message = message + "*";
  }
  console.log(message);
}

// NOTE :- We couldn't use "console.log()" to print the patterns bcoz it introduces a new line everytime it gets executed.
// Hence needed to follow this approach.

console.log("##################################");

// task - 8

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  else console.log(i);
}

console.log("##################################");

// task - 9

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    console.log(i);
    break;
  } else console.log(i);
}
