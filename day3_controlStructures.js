// Task-1
const num = -23;
if (num >= 0) {
  if (num == 0) {
    console.log(num + " is Zero");
  } else {
    console.log(num + " is Positive");
  }
} else {
  console.log(num + " is Negative");
}

// Task-2
const age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You aren't eligible to vote.");
}

// Task-3
let a, b, c;
a = 3;
b = 2;
c = 7;
// See the logic I implemented from this pic :- {https://drive.google.com/file/d/12YdenB-lEA-aKlEzJ1AsV8dUNLCNKwzV/view?usp=sharing}
if (a > b && a > c) {
  console.log(a + " is the largest.");
} else if (a < b && a < c) {
  if (b > c) {
    console.log(b + " is the largest.");
  } else {
    console.log(c + " is the largest.");
  }
} else {
  if (a > b) {
    console.log(c + " is the largest.");
  } else {
    console.log(b + " is the largest.");
  }
}
// Simpler logic:-
// See logic from here {https://drive.google.com/file/d/1_3z6YFMrklnn76-fVEIUgxaSwK3qYrVk/view?usp=sharing}
if (a > b) {
  if (c > a) {
    console.log(c + " is the largest.");
  } else {
    console.log(a + " is the largest.");
  }
} else {
  if (c > b) {
    console.log(c + " is the largest.");
  } else {
    console.log(b + " is the largest.");
  }
}

// Task-4
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Please enter the right day, that is in between 1-7!");
    break;
}
// Q) {Is the use of "break" compulsory in switch case statements?}
// Ans:-
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple");
  case "banana":
    console.log("Banana");
  case "orange":
    console.log("Orange");
  default:
    console.log("Unknown fruit");
}
// So; In the example above, all subsequent cases and the default case are executed after the matching case because there are no break statements.
// Hence, in general its compulsory if we want to terminate the execution if any one of the cases is satisfied!!

// Task-5
// To assign grade based on a score.
let score = 85;
// NOTE In JavaScript, the switch statement does not support the use of inequality symbols (>, <, >=, <=) directly within its case clauses. The switch statement performs strict equality checks (===) between the expression and the case values.
// If you still want to use a switch-like structure but with conditions, you can combine switch with if-else:

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  case score <= 59 && score >= 0:
    console.log("F");
  default:
    console.log("Value is negative");
}
// Of course, Had you placed the lower cases up, the upper cases would not have been triggered.

// Task-6
let givenNum;
givenNum = 3450;
let result = !Boolean(givenNum % 2) ? "Even" : "Odd";
// if number is even, then (that num)%2 gives 0 => which in boolean means false, so "!" will convert it to true => hence the true block will run.
console.log(result);

// task-7
let year = 2024;
if (year % 4 == 0 && year % 100 != 0) {
  console.log(year + " is a leap year.");
} else {
  if (year % 100 == 0 && year % 400 == 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log("Not a leap year.");
  }
}

// Completed!!
