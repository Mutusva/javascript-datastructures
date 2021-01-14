/*
  Write a function 'canSum(target, numbers)' that takes in a targetSum and an array of numbers as arguments.

  The function should return a boolean indicating whether or not it is possible to generate tghe targetSum using numbers
  from the array.

  You may use an elenment of the array as many times as needed.

  You may assume that all input numbers are nonnegative.
*/

const canSum = (targetSum, nums) => {
  let table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (let j = 0; j < nums.length; j++) {
        let pos = i + nums[j];
        if (pos < table.length) table[pos] = true;
      }
    }
  }
  //console.log(table);
  return table[targetSum];
};

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
