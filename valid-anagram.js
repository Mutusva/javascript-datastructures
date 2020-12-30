function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;

  let map1 = {};
  let map2 = {};

  for (let char of str1) {
    map1[char] = (map1[char] || 0) + 1;
  }

  for (let char of str2) {
    map2[char] = (map2[char] || 0) + 1;
  }

  for (let key in map1) {
    if (!(key in map2)) return false;
    if (map1[key] !== map2[key]) return false;
  }

  return true;
}

console.log(validAnagram("texttwisttime", "timetwisttext"));
console.log(validAnagram("tacsore", "orecat"));
console.log(validAnagram("", ""));
