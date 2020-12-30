var radixSort = (arr) => {
  let len = mostDigits(arr);
  for (let i = 0; i < len; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let position = getDigit(arr[j], i);
      buckets[position].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

var getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

var digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

var mostDigits = (arr) => {
  let maxDig = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDig = Math.max(digitCount(arr[i]), maxDig);
  }
  return maxDig;
};

console.log(radixSort([7234, 11, 584, 79, 24, 9, 5]));
