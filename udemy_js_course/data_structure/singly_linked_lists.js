class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /*
  adds an item to the end linked list
  */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /*
  removes the last item of the linked list
  */
  pop() {
    let cur = this.head;
    let newTail = cur;
    if (!cur) return undefined;
    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  /*
  removes the first item of the linked list
  */

  shift() {
    if (!this.head) return undefined;

    let cur = this.head;
    this.head = cur.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return cur;
  }

  /*
  adds an item infront of the linked list
  */
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /*
  gets a node at an index of the linked list
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let cur = this.head;
    while (count < index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  /*
  sets the value of a node at an index of the linked list
  */
  set(index, val) {
    let node = get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  /*
  inserts a node at an index of the linked list
  */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(val);
    if (index === 0) return !!this.unShift(newNode);
    if (index === this.length) return !!this.push(newNode);

    let cur = this.get(index - 1);
    let temp = cur.next;
    cur.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  /*
  removes a node at an index of the linked list
  */
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let cur = get(index - 1);
    let removedNode = cur.next;
    cur.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    if (this.length <= 1) return this;
    let cur = this.head;
    let prev = null;

    while (cur) {
      let temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }
    this.tail = this.head;
    this.head = prev;
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(2);
list.push(9);

list.unShift(1);
console.log(list.get(4));
list.reverse();
