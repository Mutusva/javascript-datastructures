class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new TreeNode(val);
    let cur = this.root;
    if (!cur) {
      this.root = node;
      return this;
    }

    while (true) {
      if (cur.val === val) return this; // handling duplicates by ignoring them. some will add a frequence counter to the node.
      if (cur.val > val) {
        if (!cur.left) {
          cur.left = node;
          return this;
        } else {
          cur = cur.left;
        }
      } else {
        if (!cur.right) {
          cur.right = node;
          return this;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  find(val) {
    let cur = this.root;
    if (!cur) return false;

    while (cur) {
      if (cur.val === val) return true;
      if (cur.val > node.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return false;
  }

  breathFirstSearch() {
    let cur = this.root;
    let visited = [];
    if (!cur) return visited;

    let queue = [];
    queue.push(cur);
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let temp = queue.shift();
        visited.push(temp.val);
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
      }
    }
    return visited;
  }

  // Depth first search algorithm - we traverse down until we hit the leaf nodes.

  DFSPreOrder() {
    let node = this.root;
    return this.preOrderHelper(node, []);
  }

  preOrderHelper(node, result) {
    if (!node) return result;

    result.push(node.val);
    let left = this.preOrderHelper(node.left, result);
    let right = this.preOrderHelper(node.right, result);
    return result.concat(left, right);
  }

  DFSPostOrder() {
    let node = this.root;
    let data = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      data.push(node.val);
    }

    traverse(node);
    return data;
  }

  DFSInOrderOrder() {
    let node = this.root;
    let data = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      data.push(node.val);
      traverse(node.right);
    }

    traverse(node);
    return data;
  }

  DFSReverseInOrderOrder() {
    let node = this.root;
    let data = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.rigth);
      data.push(node.val);
      traverse(node.left);
    }

    traverse(node);
    return data;
  }
}
