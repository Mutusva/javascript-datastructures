/**
 * Definition for a binary tree node.

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var findTarget = function (root, k) {
  let map = {};
  return traverse(root, k, map);
};

function traverse(root, k, map) {
  if (!root) return false;

  let val = k - root.val;

  if (val in map) return true;

  map[root.val] = root.val;

  let left = traverse(root.left, k, map);
  let right = traverse(root.right, k, map);

  return left || right;
}

console.log(findTarget(new TreeNode(2, new TreeNode(1), new TreeNode(3)), 4));
