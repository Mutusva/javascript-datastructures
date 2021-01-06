// for the max heap we do not need a node class, we use the position to model the structure of the heap
class MaxBinaryHeap {
  // parent_index = Math.floor((i - 1) / 2);
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.MaxHeapify();
    return this;
  }

  extractMax() {
    if (this.values.length === 0) return null;

    let max = this.values[0];
    if (this.values.length === 1) {
      this.values = [];
    } else {
      let lastItem = this.values.pop();
      this.values[0] = lastItem;
      this.bubbleDown();
    }
    return max;
  }

  MaxHeapify() {
    let lastIndex = this.values.length - 1;

    while (
      lastIndex > 0 &&
      this.values[lastIndex] > this.values[this.parent(lastIndex)]
    ) {
      this.swap(this.parent(lastIndex), lastIndex);
      lastIndex = this.parent(lastIndex);
    }
  }

  bubbleDown() {
    let idx = 0;
    let len = this.values.length;

    while (true) {
      let left_idx = 2 * idx + 1;
      let right_idx = 2 * idx + 2;
      let cur = this.values[idx];
      let lchild, rchild;
      let swap_index = null;

      if (left_idx < len) {
        lchild = this.values[left_idx];
        if (lchild > cur) swap_index = left_idx;
      }

      if (right_idx < len) {
        rchild = this.values[right_idx];
        if (
          (swap_index === null && rchild > cur) ||
          (swap_index !== null && rchild > lchild)
        ) {
          swap_index = right_idx;
        }
      }

      if (swap_index === null) break;
      this.swap(idx, swap_index);
      idx = swap_index;
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
}
