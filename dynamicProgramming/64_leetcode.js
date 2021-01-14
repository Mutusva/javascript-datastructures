var minPathSum = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let dp = [];
  for (let i = 0; i < grid.length; i++) {
    dp[i] = Array.from({ length: grid[0].length }, () => 0);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      dp[i][j] += grid[i][j];
      if (i > 0 && j > 0) {
        dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
      } else if (i > 0) {
        dp[i][j] += dp[i - 1][j];
      } else if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};

let grid = [
  [1, 3, 1, 7],
  [1, 5, 1, 2],
  [4, 2, 1, 1],
];
console.log(minPathSum(grid));
