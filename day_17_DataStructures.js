// Task_1
class Node {
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
    id = Math.floor(Math.random()*10);
}

const NodeOne = new Node(5,3);
console.log(NodeOne.id);
