let grid = [
  ["1", "*", "1", "*", "*"],
  ["1", "*", "1", "1", "1"],
  ["1", "1", "*", "1", "*"],
  ["*", "1", "1", "1", "*"],
  ["1", "*", "1", "1", "E"],
  ["1", "1", "1", "*", "*"],
];

const findPath = (grid, start, visited = {}) => {
  let key = start.x + "," + start.y;
  let end = "E";

  if (visited[key]) return visited[key];

  return false;
};

const findPathDFS = (grid, start) => {
  let foundPath = false;
  let stack = [];
  let visited = {};
  stack.push(start);

  while (stack.length) {
    let p = stack.pop();
    let key = p.x + "," + p.y;
    if (visited[key]) continue;

    visited[key] = true;

    let cur = grid[p.y][p.x];
    if (cur === "E") {
      foundPath = true;
      return foundPath;
    }
    if (cur === "*") {
      continue;
    } else {
      if (p.x + 1 < grid[0].length) stack.push({ y: p.y, x: p.x + 1 });
      if (p.x - 1 > 0) stack.push({ y: p.y, x: p.x - 1 });
      if (p.y - 1 > 0) stack.push({ y: p.y - 1, x: p.x });
      if (p.y + 1 < grid.length) stack.push({ y: p.y + 1, x: p.x });
    }
  }
  return foundPath;
};

console.log(findPathDFS(grid, { x: 0, y: 0 }));
