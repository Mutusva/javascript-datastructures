/*
  Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments. 
  The function should return an array containing the shortes combination of numbers that a add up to exactly the target sum.

  if there is a tie for the shortest combination, you may return any one of the shortest.

  NB:  this is an optimization problem
*/

const bestSum = (targetSum, numbers, resultSofar = []) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let result = bestSum(remainder, numbers, resultSofar);
    if (result !== null) {
      let res = [...result, num];
      resultSofar.push(num);
      if (resultSofar.length === 0) {
        resultSofar = res;
      } else {
        resultSofar = res.length < resultSofar.length ? res : resultSofar;
      }
    }
  }
  return resultSofar;
};

/*
Time n space complexity
 m = target sum;
 n = numbers.length
 1) brute Force without memoization
  -- time = O(n ^ m * m)  the times m comes from the array we constructing
  --space = O(m * m)  // max stack depth = m then * the shortestCombination max length

2) Memoized
--time O(m * n * m) = O(m^2 * n)
--space O(m^2)
*/
const bestSum_nice = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let result = bestSum_nice(remainder, numbers, memo);
    if (result) {
      let res = [...result, num];
      if (
        shortestCombination === null ||
        result.length < shortestCombination.length
      ) {
        shortestCombination = res;
      }
    }
    memo[targetSum] = shortestCombination;
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum_nice(8, [2, 3, 5]));
console.log(bestSum_nice(8, [1, 4, 5]));
console.log(bestSum_nice(100, [1, 2, 5, 25]));
