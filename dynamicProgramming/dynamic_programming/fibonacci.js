// big O for fibonacci is O(2^n)
// using memoization we can improve the algorithm like below
var fib = (n, memo = {}) => {
  if (n in memo) return memo[n]; // object keys are usually strings in JS
  if (n <= 2) return 1;

  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

// Tabulation approach for dynamic problem
var fib_bottom_up = (n) => {
  if (n <= 2) return 1;

  //var table = Array(n + 1).fill(0);
  var table = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
};

console.log(fib(8));
console.log(fib_bottom_up(20));
console.log(fib_bottom_up(80));
