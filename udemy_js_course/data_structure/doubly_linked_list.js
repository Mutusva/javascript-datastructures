class Node {
  constructor(value, next = null, prev = null) {
    this.val = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
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

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /*
  removes the last item of the linked list
  */

  pop() {
    if (!this.head) return null;

    let cur = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = cur.prev;
      this.tail.next = null;
      cur.prev = null;
    }
    this.length--;
    return cur;
  }

  /*
  removes the first item of the linked list
  */
  shift() {
    if (!this.head) return null;

    let cur = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = cur.next;
      this.head.prev = null;
      cur.next = null;
    }
    this.length--;
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
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let mid = Math.floor((this.length - 1) / 2);
    let cur;
    let count;
    if (index <= mid) {
      count = 0;
      cur = this.head;
      while (count < index) {
        cur = cur.next;
        count++;
      }
    } else {
      cur = this.tail;
      count = this.length - 1;
      while (count > index) {
        cur = cur.prev;
        count--;
      }
    }
    return cur;
  }

  /*
  sets the value of a node at an index of the linked list
  */
  set(index, val) {
    let cur = this.get(index);
    if (!cur) return false;
    cur.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShift(val);
    if (index === this.length - 1) return !!this.push(val);

    let cur = this.get(index - 1);
    let temp = cur.next;

    let newNode = new Node(val);
    newNode.prev = cur;
    (newNode.next = temp), (temp.prev = newNode);
    cur.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop(val);

    let cur = this.get(index);
    cur.next.prev = cur.prev;
    cur.prev.next = cur.next;
    cur.next = null;
    cur.prev = null;
    this.length--;
    return cur;
  }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(8);
list.push(4);
list.pop();

console.log(list);
