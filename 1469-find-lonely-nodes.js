var getLonelyNodes = function (root) {
  let result = [];
  transverse(root, root, result);

  return result;
};

function transverse(root, head, result) {
  // 1,1, []
  if (!root) return;

  transverse(root.left, head, result);
  transverse(root.right, head, result);

  if ((root.left && !root.right) || (!root.left && root.right)) {
    let lonelynode = root.left ? root.left : root.right;

    if (lonelynode !== head) result.push(lonelynode.val);
  }
}
