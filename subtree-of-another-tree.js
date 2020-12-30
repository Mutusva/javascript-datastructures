function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSubtree = function (s, t) {
  if (!s && !t) return false;

  let foundNode = findNode(s, t.val);

  if (!foundNode) return false;

  return compare(foundNode, t);
};

var findNode = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  findNode(root.left, val);
  findNode(root.right, val);

  return null;
};

var compare = function (node1, node2) {
  if (!node1 || !node2) return false;
  if (node1.val !== node2.val) return false;
  if (!node1 && !node2) return true;

  compare(node1.right, node2.right);
  compare(node1.left, node2.left);

  return true;
};
