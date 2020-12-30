function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = 1;

  if (arr.length === 0 || arr.length === 1) return arr.length;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }

  return i + 1;
}

// its linear time
console.log(countUniqueValues([1, 1, 5, 7, 7, 9]));
console.log(countUniqueValues([1, 2]));
console.log(countUniqueValues([1]));
console.log(countUniqueValues([]));
