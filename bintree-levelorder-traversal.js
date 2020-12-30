function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  let res = [];

  if (!root) return;
  let depth = 0;
  let map = {};
  let que = [];

  que.push(new Node(root, 0));

  while (que.length) {
    let cur = que.shift();

    if (cur.depth in map) {
      map[cur.depth].push(cur.node.val);
    } else {
      map[cur.depth] = [cur.node.val];
    }

    if (cur.node.left) {
      que.push(new Node(cur.node.left, cur.depth + 1));
    }

    if (cur.node.right) {
      que.push(new Node(cur.node.right, cur.depth + 1));
    }
  }

  for (const key in map) {
    res.push(map[key]);
  }

  return res;
};

class Node {
  constructor(node, depth) {
    this.node = node;
    this.depth = depth;
  }
}

console.log(
  levelOrder(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(5))
    )
  )
);
