function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var leafSimilar = function (root1, root2) {
  let arr1 = [];
  let arr2 = [];

  getLeafNodes(root1, arr1);
  getLeafNodes(root2, arr2);

  console.log(arr1);
  console.log(arr2);

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

let getLeafNodes = (root, result) => {
  if (!root) return;

  if (!root.left && !root.right) result.push(root.val);

  getLeafNodes(root.left, result);
  getLeafNodes(root.right, result);
};

console.log(leafSimilar(new TreeNode(1), new TreeNode(2)));
