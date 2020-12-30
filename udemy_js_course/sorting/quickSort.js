var quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot = getPivot(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
};

var getPivot = (arr, start, end) => {
  let pivotItem = arr[start];
  let i = start + 1;
  let pivotIndex = start;
  while (i <= end) {
    if (pivotItem > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
    i++;
  }

  if (pivotIndex != start) {
    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
  }

  return pivotIndex;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 3, 6]));
