var maxSubarraySum = (arr, n) => {
  if (arr.length < n) return 0;

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  for (let i = n; i < arr.length; i++) {
    let tempSum = maxSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([1, 2], 3));
