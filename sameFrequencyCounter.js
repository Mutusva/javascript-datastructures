function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  if (!num1 || !num2) return false;

  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let obj = {};

  for (let char of str1) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let key of str2) {
    if (!(key in obj)) return false;
    obj[key] -= 1;
  }

  return true;
}

console.log(sameFrequency(127, 821));
