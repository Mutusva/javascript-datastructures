// given a target and an array, witer a function that determine if we can get the target sum from array
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
