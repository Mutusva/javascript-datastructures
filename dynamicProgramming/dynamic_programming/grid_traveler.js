let date = new Date("2021-01-10T18:26:31.132Z");
//console.log(date.getSeconds());

// finds the number of ways to move from top left to bottom right corner of a grid. you only allowed to move right or down
const gridTraveler = (n, m, memo = {}) => {
  let key = n + "," + m; // just concating the two wont make a proper def of what you what e.g m =2, n=42 and m=24, n=2
  if (key in memo) return memo[key];
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
};

console.log(gridTraveler(50, 50));
/*
console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 1));
console.log(gridTraveler(2, 2));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
*/
