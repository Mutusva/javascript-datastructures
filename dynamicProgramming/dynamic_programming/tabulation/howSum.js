/*
this is similar to howSum function
Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
The function should return an array containing any combination of the elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum
then return null,

if there are multiple combinations possible, you may return any single one.

NB: Comninatorial Problem
*/
var howSum = (targetSum, nums) => {
  let table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        let index = i + num;
        if (index < table.length && table[index] === null)
          table[index] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 13]));
