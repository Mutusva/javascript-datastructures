function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var postOrder = (root) => {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);

  console.log(root.val);
};

var preOrder = (root) => {
  if (!root) return;

  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

var inOrder = (root) => {
  if (!root) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};

preOrder(
  new TreeNode(
    4,
    new TreeNode(2, new TreeNode(3), new TreeNode(5)),
    new TreeNode(9, null, new TreeNode(7))
  )
);
