function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  return swapHelper(head, 2, 0);
};

var swapHelper = (node, k, i) => {
  let prev = null;
  let current = node;
  let len = i + k;

  while (i < len && current) {
    current = current.next;
    i++;
  }

  let start;

  if (!prev) {
    start = reverse(node, current);
    prev = node;
    node = start;
  }

  if (current) prev.next = swapHelper(current, k, i);

  return node;
};

var reverse = function (head, stop) {
  let prev = null;
  let current = head;

  while (current !== stop) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
};

var swap_pairs = (node) => {
  if (!node.next) return node;
  let start = node.next;
  let p = node;
  let q = node.next;
  let temp = q.next;

  while (q) {
    q.next = p;
    if (temp) {
      p.next = temp.next;
      p = temp;
      q = temp.next;
      temp = !q ? null : q.next;
    } else {
      q = null;
    }
  }

  return start;
};

/*
swap_pairs(
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
);
*/

swap_pairs(new ListNode(1, new ListNode(2, new ListNode(3))));
