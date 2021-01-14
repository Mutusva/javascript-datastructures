/*
  Write a function 'canSum(target, numbers)' that takes in a targetSum and an array of numbers as arguments.

  The function should return a boolean indicating whether or not it is possible to generate tghe targetSum using numbers
  from the array.

  You may use an elenment of the array as many times as needed.

  You may assume that all input numbers are nonnegative.
*/
// NB: Decision Problem

const canSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of nums) {
    let remainder = target - num;
    let result = canSum(remainder, nums, memo);
    if (result === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

console.log(canSum(300, [7, 14]));
