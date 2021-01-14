/*
  Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments. 
  The function should return an array containing the shortes combination of numbers that a add up to exactly the target sum.

  if there is a tie for the shortest combination, you may return any one of the shortest.

  NB:  this is an optimization problem
*/
const bestSum = (targetSum, nums) => {
  let table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        let index = i + num;
        if (index < table.length) {
          let newWay = [...table[i], num];
          if (!table[index] || table[index].length > newWay.length) {
            table[index] = newWay;
          }
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));

console.log(bestSum(100, [1, 25, 5, 2]));
