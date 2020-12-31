class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //since its a stack implementation, we going to add and remove from the head to get constant time.
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size; //increament and return
  }

  pop() {
    if (!this.first) return null;
    let cur = this.first;
    if (this.size === 0) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return cur.val;
  }
}
