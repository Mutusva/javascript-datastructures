function maxTrailing(levels) {
  // Write your code here
  let maxRecord = -1;
  for (let i = 1; i < levels.length - 1; i++) {
    let cur = levels[i];
    for (let j = i; j >= 0; j--) {
      if (cur > levels[j]) {
        maxRecord = Math.max(maxRecord, cur - levels[j]);
      }
    }
  }
  return maxRecord;
}

function maxTrailing02(levels) {
  let i = 0;
  let j = 1;
  let maxRecord = -1;
  while (j < levels.length) {
    if (levels[j] > levels[i]) {
      maxRecord = Math.max(maxRecord, levels[j] - levels[i]);
      j++;
    } else if (j === i) {
      j++;
    } else {
      i++;
    }
  }
  return maxRecord;
}

console.log(maxTrailing02([4, 3, 7, 1, 8, 11, 25, 100, 25, 6]));
