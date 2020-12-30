var insertionSort = (arr) => {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && cur < arr[j]) {
      swap(arr, j, j + 1);
      j--;
    }
  }
  return arr;
};

const swap = (arr, i, j) => {
  //ES5
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(insertionSort([11, 7, 18, 1, 2, 3, 4]));
