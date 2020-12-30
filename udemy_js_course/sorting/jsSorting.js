console.log([10, 7, 18, 3, 2, 4].sort()); // [10, 18, 2, 3, 4, 7]

console.log(
  [10, 7, 18, 3, 2, 4].sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  })
);

var compare = (a, b) => {
  return a - b;
};

console.log([10, 7, 18, 3, 2, 4].sort(compare));
