let naiveSearch = (str, pattern) => {
  let counter = 0;
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
      if (j === pattern.length - 1) counter++;
    }
  }

  return counter;
};

console.log(naiveSearch("woomglodrfomghjg", "omg"));
