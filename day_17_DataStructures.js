// Task-1
// First let's define the node class!
class Node {
  constructor(value) {
    this.value = value; // Stores the value of the node
    this.next = null; // Points to the next node, initialized to null
  }
}
// Next, 2 instances banake, let's link the nodes!
const node1 = new Node(12);
const node2 = new Node(16);
// Now what value we should give to node1's "next" in order to link it to node 2?
node1.next = node2; // Link node1 to node2
// OK, so we can directly pass the node2 to node1's next var.

// Task-2
// I think, we can define the linked list class's constructor to accept array of nodes.
// No, not like this; else:-
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToEnd(value) {
    // Made a new node
    const newNode = new Node(value);
    // If the list is empty, insert it right-away, else
    // traverse the linked list throughout to get the last node!
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      // Initiate a current named variable whom we will iterate until null is found as that node's "next" value!
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeFromEnd() {
    // Handle the empty list case
    if (!this.head) {
      console.log("List is already empty");
      return;
    }

    // Handle the case when there's only one node
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  displayAll() {
    let current = this.head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }
}

const list1 = new LinkedList();
list1.addToEnd(3);
list1.addToEnd(7);
list1.addToEnd(6);
list1.addToEnd(2);
list1.displayAll();
list1.removeFromEnd();
list1.displayAll();
list1.removeFromEnd();
list1.displayAll();
list1.removeFromEnd();
list1.displayAll();
list1.removeFromEnd();
list1.displayAll();
list1.removeFromEnd();
list1.displayAll();

// task-3
// Implementing Stack:-

class stack {
  // It will define and input the first element in the stack.
  // No, don't do like this. In constructor fxn just define the array!
  constructor() {
    this.stackArr = [];
    // this.stackArr.push(value);
  }

  pushOperation(value) {
    this.stackArr.push(value);
  }

  popOperation() {
    this.stackArr.pop();
  }

  peekOperation() {
    if (this.stackArr.length == 0) {
      return "Empty stack!";
    } else {
      return this.stackArr[this.stackArr.length - 1];
    }
  }

  displayAllElementsOfStack() {
    if (this.stackArr.length == 0) {
      return "Empty stack!";
    } else {
      let tempStr = "";
      this.stackArr.forEach(
        (eachElement) => (tempStr = tempStr + eachElement + " ")
      );
      // return this.stackArr.forEach((eachEle) => eachEle);
      return tempStr;
    }
  }
}

const stackOne = new stack();
console.log(stackOne.displayAllElementsOfStack());
stackOne.pushOperation(23);
stackOne.pushOperation(29);
stackOne.pushOperation(45);
stackOne.pushOperation(67);
stackOne.pushOperation(20);
console.log(stackOne.displayAllElementsOfStack());
console.log(stackOne.peekOperation());
stackOne.popOperation();
console.log(stackOne.displayAllElementsOfStack());
console.log(stackOne.peekOperation());

// Task-4
let strToRev = "MadaN";
const stackTwo = new stack();
for (let i = 0; i < strToRev.length; i++) {
  stackTwo.pushOperation(strToRev[i]);
}
let reversedStr = "";
// stackTwo.stackArr.forEach((eachEle) => (
//   reversedStr = reversedStr + stackTwo.peekOperation();
//   stackTwo.pop();
// ))
while (stackTwo.stackArr.length > 0) {
  reversedStr = reversedStr + stackTwo.peekOperation();
  stackTwo.popOperation();
}
console.log(reversedStr);

// Task-5
class myQueue {
  constructor() {
    this.queueArray = [];
  }

  enqueue(value) {
    if (this.queueArray.length == 0) {
      this.queueArray.push(value);
    } else {
      // this.queueArray.unshift(value); // It prepends the "value" in the front of the array and shifts rest of the array!
      this.queueArray.push(value);
    }
  }

  dequeue() {
    if (this.queueArray.length == 0) {
      return "Queue Already Empty!";
    } else {
      this.queueArray.shift();
      //It technically shifts the elements to the left and hence returns the leftmost element (first element).
    }
  }

  front() {
    if (this.queueArray.length == 0) {
      return "Queue Already Empty!";
    } else {
      return this.queueArray[0];
    }
  }

  displayAll() {
    if (this.queueArray.length == 0) {
      return "Empty Queue!";
    } else {
      let tempStr = "";
      this.queueArray.forEach(
        (eachElement) => (tempStr = tempStr + eachElement + " ")
      );
      return tempStr;
    }
  }
}

const myQueueOne = new myQueue();
myQueueOne.enqueue(2);
myQueueOne.enqueue(12);
myQueueOne.enqueue(17);
myQueueOne.enqueue(19);
console.log(myQueueOne.displayAll());
myQueueOne.dequeue();
console.log(myQueueOne.displayAll());
myQueueOne.dequeue();
console.log(myQueueOne.displayAll());
myQueueOne.enqueue(67);
myQueueOne.enqueue(98);
myQueueOne.enqueue(23);
console.log(myQueueOne.displayAll());
console.log(myQueueOne.front());

// Task-6
const printerSimulation = new myQueue();
printerSimulation.enqueue("task1");
printerSimulation.enqueue("task2");
printerSimulation.enqueue("task3");
printerSimulation.enqueue("task4");
console.log(printerSimulation.displayAll());
function print() {
  console.log(`Printed the ${printerSimulation.front()}`);
  printerSimulation.dequeue();
  console.log(`Left out tasks:- `);
  console.log(printerSimulation.displayAll());
  printerSimulation.dequeue();
}
print();
