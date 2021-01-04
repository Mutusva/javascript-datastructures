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

  insert_rec(val) {
    let cur = this.root;
    let newNode = new TreeNode(val);
    if (!cur) this.root = newNode;
    else this.insert_helper(cur, newNode);
    return this;
  }

  insert_helper(cur, node) {
    if (!cur) return;
    if (cur.val > node.val) {
      if (!cur.left) {
        cur.left = node;
      } else {
        this.insert_helper(cur.left, node);
      }
    } else {
      if (!cur.right) {
        cur.right = node;
      } else {
        this.insert_helper(cur.right, node);
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
}
