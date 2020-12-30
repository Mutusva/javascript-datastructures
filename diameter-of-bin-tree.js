function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  let rheight = height(root.right);
  let lheight = height(root.left);

  let ldiameter = diameterOfBinaryTree(root.left);
  let rdiameter = diameterOfBinaryTree(root.right);

  let result = Math.max(rheight + lheight + 1, Math.max(ldiameter, rdiameter));

  return result;
};

function height(root) {
  if (!root) return 0;

  let rheight = height(root.left);
  let lheight = height(root.right);

  return 1 + Math.max(rheight, lheight);
}

function postorder(root) {
  if (!root) return;

  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

let result = diameterOfBinaryTree(
  new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  )
);

/*
new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  )

  */
// console.log(result);
postorder(
  new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  )
);
