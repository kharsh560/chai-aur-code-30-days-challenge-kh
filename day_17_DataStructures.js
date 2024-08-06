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