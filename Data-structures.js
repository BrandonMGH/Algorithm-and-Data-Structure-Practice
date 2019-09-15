
// ** Linked List Practice ** // 

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 3);

// ll.clearList();
// ll.getAt(2);

ll.printListData();


// ** My first Queue ** //

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {

    if (this.isEmpty()) {
      return "Underflow";
    } else {
      return this.items.shift();
    }
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printQueue() {
    let finalArr = this.items
    return finalArr
  }
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }

}


const queueOne = new Queue()

queueOne.enqueue(1);
queueOne.enqueue(2);
queueOne.enqueue(3);
queueOne.dequeue();

console.log(queueOne.printQueue())




// ** My first stack ** // 

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }
  peek() {

    return this.items[this.items.length - 1];
  }
  isEmpty() {

    return this.items.length == 0;
  }
}

const stackOne = new Stack()

stackOne.push(10)
stackOne.push(25)
stackOne.push(43)
stackOne.pop();

console.log(stackOne)
console.log(stackOne.peek())

class StackQueue {
  constructor() {
    this.arrOne = []
    this.arrTwo = []
  }
  push(item) {
    this.arrOne.push(item);
    this.arrTwo.push(item)
  }
  dequeue() {
    return this.arrOne.shift();
    console.log(this.arrOne.shift())
  }
  pop() {
    return this.arrTwo.pop();
    console.log(this.arrTwo.pop())
  }
}

const StackQueueOne = new StackQueue()

StackQueueOne.push("Hello")
console.log(StackQueueOne)
StackQueueOne.dequeue();
StackQueueOne.pop();
console.log(StackQueueOne)


// ** Binary Search Tree ** //

class NodeBST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new NodeBST(value)
    this.count = 1
  }
  size() {
    return this.count
  }

  insert(value) {
    this.count++

    let newNode = new NodeBST(value)

    const searchTree = node => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode
        } else {
          searchTree(node.left)
        }

      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode
        }
        else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }

  min() {
    let currentNode = this.root

    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value

  }
  max() {
    let currentNode = this.root

    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value

  }
  containers(value) {
    let currentNode = this.root
    while (currentNode){
      if(value === currentNode.value){
        return true
      }
      if(value < currentNode.value){
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right 
      }
    }
    return false 
  }

  //** depth first searches - looks branch by branch **//


  dfsInOrder () {
    let result = []
    const traverse = node =>{
      if (node.left) {
        traverse(node.left)
      }
      result.push(node.value)
      if (node.right){
        traverse(node.right)
       
      }
    }
    traverse(this.root)
    return result 
  }
  dfsPreOrder () {
    let result = []
    
    const traverse = node =>{
      result.push(node.value)
      if(node.left){
        traverse(node.left)
      }
      if(node.right) {
        traverse(node.right)
      }
    }
    traverse(this.root)
    return result 
  }
  dfsPostOrder () {
    let result = []
    
    const traverse = node =>{
      
      if(node.left){
        traverse(node.left)
      }
      if(node.right) {
        traverse(node.right)
      }
      result.push(node.value)
    }
  
    traverse(this.root)
    return result 
  }

  //** Breadth First Search  **//

  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while(queue.length){
      let currentNode = queue.shift()

      result.push(currentNode.value)

      if (currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return result 
  }
  

}

const bst = new BST(15)
bst.insert(10)
bst.insert(24)
bst.insert(3)
bst.insert(7)
bst.insert(33)
bst.insert(55)

console.log(bst)



