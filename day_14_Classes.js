// Task-1
class Person {
  constructor(name, age) {
    this.userName = name;
    this.userAge = age;
  }
  greetMethod() {
    console.log(
      `Hello ${this.userName}, I'm Macbook. Yow are ${this.userAge} years old!`
    );
  }
  // Task-2
  updateUserAge(newAge) {
    this.userAge = newAge;
  }
}

const person_1 = new Person("Harshu", 33);

console.log(person_1);
person_1.greetMethod();
person_1.updateUserAge(40);
console.log(person_1);

// Task-3
// In JavaScript, super is a keyword used in classes that derive from another class, which means the class is a subclass. It is primarily used for two things:
// 1) To call the constructor of the parent class.
// 2) To access methods from the parent class.

// When to use super()
// When you have a subclass and want to initialize it with some properties from the parent class, you use super().
// This is mandatory when your subclass has its own constructor.
class Student extends Person {
  // Its the method if you want all the props from the parent and get it stored in the object.
  constructor(name, age, student_Id) {
    super(name, age);
    this.student_Id = student_Id;
  }
}
// NOTE:
// Mandatory super() Call: In a derived class (a class that uses extends), you must
// call super() before you can use this in the constructor. This is because super() initializes
// the parent class and ensures the instance has been properly set up.

const studentOne = new Student("KH", 1003, 3185);
console.log(studentOne.student_Id);
studentOne.greetMethod();

// Task-4
// Method Overriding: When you want to override a method in the subclass but still want
// to utilize some functionality from the parent class's method, you can use super.methodName()
// An Eg;
// class Cat extends Animal {
//   constructor(name) {
//     super(name, 'Cat');
//   }

//   makeSound() {
//     console.log(`${this.name} meows.`);
//   }
// }
// NOTE: In this example, the makeSound() method in Cat overrides the parent class's method without using super.makeSound();. This is common when the subclass wants entirely different behavior.

// But we want to keep the behaviour of parent's class and include the prop of child class "studentId"
// So:-
class StudentTwo extends Person {
  static numberOfStudentsCreated = 0;
  constructor(name, age, student_Id) {
    super(name, age);
    this.student_Id = student_Id;
    StudentTwo.numberOfStudentsCreated++;
    console.log(`Number of students created:- ${StudentTwo.numberOfStudentsCreated}`);
  }

  greetMethod() {
    super.greetMethod();
    console.log(
      `And the student using this laptop is having id as ${this.student_Id}`
    );
  }
}

const SecondStud = new StudentTwo("Dr. Doom", 54, 3241);
SecondStud.greetMethod();

// Task-5
// In JavaScript, static methods are functions that belong to a class itself rather than to instances of the class.
// This means you can call a static method directly on the class without needing to create an instance of it.
// Static methods are often used for utility functions or operations that don't require data from individual instances.

class MathUtilities {
  // A static method to add two numbers
  static add(a, b) {
    return a + b;
  }

  // A static method to multiply two numbers
  static multiply(a, b) {
    return a * b;
  }

  // A non-static method
  instanceMethod() {
    console.log(
      "This is an instance method, envoked after creating the instance of the calss 'MathUtils'!"
    );
  }
}

// Using the static methods
console.log(MathUtilities.add(10, 5)); // Output: 15
console.log(MathUtilities.multiply(3, 4)); // Output: 12

// Trying to call the static method from an instance
const mathUtil = new MathUtilities();
mathUtil.instanceMethod(); // This works
// mathUtil.add(10, 5);    // This will throw an error

// Task-6
// See the studentTwo class.
const SecStud = new StudentTwo("Dr. Laura", 24, 3243);
// NOTE: The code:-
// class StudentTwo extends Person {
//   static numberOfStudentsCreated = 0;
//   constructor(name, age, student_Id) {
//     super(name, age);
//     this.student_Id = student_Id;
//     StudentTwo.numberOfStudentsCreated++;
//     console.log(`Number of students created:- ${StudentTwo.numberOfStudentsCreated}`);
//   }
// NOTE:
// 1) Declare numberOfStudentsCreated as a Static Property:-
// By using the static keyword, you define numberOfStudentsCreated on the class itself, not on each instance.
// This way, all instances of StudentTwo share the same counter.
// 2) Access Static Properties Using the Class Name:-
// Since numberOfStudentsCreated is static, access it using StudentTwo.numberOfStudentsCreated rather than this.numberOfStudentsCreated.

// Task-7 & Task-8
// In JavaScript, getters and setters are special methods used within classes or objects to define 
// how to access and modify private properties. They provide a more controlled way of reading and 
// updating an object's properties. These methods can help encapsulate internal state, allowing for 
// validation, computation, or transformation of data before it is accessed or modified.
// NOTE: Revise L48 Of chai aur JS series.

// Task-9 and Task-10

// Here's how you can define a class Account with private fields for balance and 
// methods to deposit and withdraw money in JavaScript. The balance will be updated only 
// through these methods, ensuring encapsulation and proper handling of transactions.

// NOTE: Difference in between "Private Fields" and "private Variables"
// Private Fields are a new addition to JavaScript introduced with the ECMAScript 2022 (ES2022) specification. 
// These fields are explicitly marked as private using the # syntax, which ensures true encapsulation and 
// prevents access from outside the class.
// Private Variables using the underscore _ prefix is a widely adopted "convention" to indicate that certain 
// properties or methods are intended for internal use only, suggesting to developers that these should not be accessed directly.
// Eg:- _privateVariable; // Not truly private, just a convention
class Account {
  // Private field for balance
  #balance;

  constructor(initialBalance = 0) {
    // Initialize balance with the given initial balance
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount <= 0) {
      console.error("Deposit amount must be positive!");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}. Current Balance: $${this.#balance}`);
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount <= 0) {
      console.error("Withdrawal amount must be positive!");
      return;
    }
    if (amount > this.#balance) {
      console.error("Insufficient balance!");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrawn: $${amount}. Current Balance: $${this.#balance}`);
  }

  // Method to get current balance (for internal use)
  getBalance() {
    return this.#balance;
  }
}

// Create an instance of Account
const myAccount = new Account(100); // Initialize with $100

// Test deposit and withdraw methods
myAccount.deposit(50);  // Deposited: $50. Current Balance: $150
myAccount.withdraw(30); // Withdrawn: $30. Current Balance: $120
myAccount.withdraw(200); // Insufficient balance!
myAccount.deposit(-20); // Deposit amount must be positive!
myAccount.withdraw(-10); // Withdrawal amount must be positive!

// Attempt to access private balance directly (should be inaccessible)
console.log(myAccount.balance); // Output: undefined (private field)
