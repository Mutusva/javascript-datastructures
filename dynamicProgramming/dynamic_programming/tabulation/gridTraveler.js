/*
  gridTraveler using Tabulation: this gives us the number of ways to travel a grid from top left corner to bottom corner where you can only move right or down.

  The Ideas is to seed the table with zeros but we know that for a 1*1 grid there is one way. we then start at 0,0 and add the current value to the neighbours.
*/

const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  if (m === 0 || n === 0) return 0;
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (j + 1 <= n) table[i][j + 1] += table[i][j];
      if (i + 1 <= m) table[i + 1][j] += table[i][j];
    }
  }
  //console.log(table);
  return table[m][n];
};

console.log(gridTraveler(3, 2));
console.log(gridTraveler(18, 18));
