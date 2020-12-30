//

function minSubArrayLen(arr, sum) {
  if (arr.length < 1) return 0;

  let i = 0;
  let j = 0;
  let total = 0;
  let min_len = Infinity;

  while (j < arr.length || total >= sum) {
    if (total >= sum) {
      total -= arr[i];
      min_len = Math.min(j - i, min_len);
      i++;
    } else {
      total += arr[j];
      j++;
    }
  }
  return min_len === Infinity ? 0 : min_len;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
