/*----------------------Bubble Sort implementation--------------------*/

var bubbleSort = (arr) => {
  let j = arr.length - 1;

  while (j > 0) {
    let noSwaps = true; //for optimisation
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        advSwap(arr, i, i + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    j--;
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const advSwap = (arr, i, j) => {
  //ES5
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(bubbleSort([11, 7, 18, 1, 2, 3, 4]));
