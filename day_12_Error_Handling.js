// Task-1
function riskyFunction() {
  // This function intentionally throws an error
  throw new Error("Something went wrong in riskyFunction!");
  // NOTE: As you can see, this above code is the syntax to create an error.
}
// NOTE:
// About "throw" keyword:-
// The throw statement is used in JavaScript to raise or throw an exception.
// When the throw statement is executed, the normal execution of code is stopped and
// control is transferred to the nearest catch block, if one exists. If no catch block
// is present, the program terminates, and a runtime error is displayed.

// About "Error" keyword:-
// Error is a built-in JavaScript constructor that creates an error object.
// An Error object represents an error that occurs during the execution of a program.
// It includes a message property that provides a description of the error and a stack property that
// gives a trace of where the error occurred.
// About: "Something went wrong in riskyFunction!" -> This is a string that acts as the error message.
// It is passed as an argument to the Error constructor and is assigned to the message property of the created Error object.
// There are other types of built-in error constructors like TypeError, ReferenceError, SyntaxError, and more, each representing specific kinds of errors.
// NOTE: The error's "stack" property isn't set by us. It gets automatically populated with the location where error started and can be accessed in "catch block" using error.stack just like error.message

function executeWithErrorHandling() {
  try {
    // Call the function that may throw an error
    riskyFunction();
  } catch (error) {
    // Handle the error and log an appropriate message
    console.log("Caught an error:", error.message);
    // console.log("Error stack:- ", error.stack);
  } finally {
    // Optional: Code that runs regardless of whether an error was caught
    console.log("Execution completed with error handling.");
  }
}

executeWithErrorHandling();

// Task-2
function divideTwoNums(num1, num2) {
  if (num2 == 0) {
    throw new Error("num2 is zero and divisibility by zero is not defined!");
  } else {
    return num1 / num2;
  }
}
// NOTE: Means function ko define karte waqt we use "throw new Error()" and while using it, we use "try-catch"!!
try {
  console.log(divideTwoNums(64, 0));
} catch (error) {
  console.log("Error Message:- ", error.message);
}

// Task-3
// Upon Valid Data Execution:
// The try block executes successfully, processing the user data and logging messages.
// The finally block runs after the try block, logging the cleanup message.

// Upon Invalid Data Execution:
// The try block encounters an error due to the missing name property and throws an exception.
// The catch block catches this error and logs the appropriate error message.
// The finally block runs after the catch block, logging the cleanup message regardless of the error.

// Task-4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
// Note:
// Constructor: This is the constructor function for the CustomError class.
// It takes a message parameter, which represents the error message that will be associated with the error instance.

// super(message): This line calls the constructor of the parent Error class, passing the message parameter to it.
// Purpose: Initializes the base Error class with the provided message. This means the message property of the Error class is set correctly.
// Required: In JavaScript classes, if you are extending another class and have a constructor in your subclass, you must call super() before
// you can use this within the constructor. Failing to do so will result in a runtime error.

function riskyFunction() {
  throw new CustomError("A custom error occurred!");
}

function executeWithErrorHandling() {
  try {
    riskyFunction();
  } catch (error) {
    if (error) {
      // Also had "instanceof CustomError"
      console.error("Caught a CustomError:", error.message);
    } else {
      console.error("Caught an error:", error.message);
    }
  }
}

executeWithErrorHandling();

// Task-5
class CustomError2 extends Error {
  constructor(message) {
    super(message);
    this.name = "String is empty!";
  }
}

function validateUserInput(string) {
  if (string.length == 0) {
    throw new CustomError2("String is empty!");
  } else {
    return string;
  }
}
try {
  console.log(validateUserInput(""));
} catch (error) {
  console.error(error.message);
}

// Task 6-7 already done in previous day's challenge of "Promises Async-Await"!!
