var selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) swap(arr, minIndex, i);
    console.log(minIndex, i);
  }

  return arr;
};

var swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(selectionSort([1, 2, 11, 3, 7, 24, 16, 12, 11]));
