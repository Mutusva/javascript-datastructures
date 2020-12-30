// leetcode 993
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isCousins = function (root, x, y) {
  if (!root) return false;
  let queue = [new Node(root, 0)];

  let first = null;
  let sec = null;

  while (queue.length > 0) {
    let cur = queue.shift();

    if (first && sec) break;

    if (cur.node.val === x) first = cur;
    if (cur.node.val === y) sec = cur;

    if (cur.node.left) {
      queue.push(new Node(cur.node.left, cur.depth + 1, cur.node.val));
    }

    if (cur.node.right) {
      queue.push(new Node(cur.node.right, cur.depth + 1, cur.node.val));
    }
  }

  if (!first || !sec) return false;
  if (first.depth !== sec.depth) return false;
  if (first.depth === 1 && sec.depth === 1) return false;
  if (first.parent === sec.parent) return false;

  return true;
};

class Node {
  constructor(node, depth, parent = null) {
    this.node = node;
    this.depth = depth;
    this.parent = parent;
  }
}

console.log(
  isCousins(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(5))
    ),
    5,
    4
  )
);
