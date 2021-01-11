/*
this is similar to canSum function
Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
The function should return an array containing any combination of the elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum
then return null,

if there are multiple combinations possible, you may return any single one.

NB: Comninatorial Problem
*/

const howSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of nums) {
    let remainder = target - num;
    let result = howSum(remainder, nums, memo);
    if (result !== null) {
      memo[target] = [...result, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(300, [7, 14]));
