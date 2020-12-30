// Udemy js algorithms and Data Structures Masterclass
//Q - write a function caleed findLongestSubstring, which accepts a string and returns the length of the longest substring with all
// distinct characters
// findLongestSubstring('rithmschool') ans = 7

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str === "") return 0;

  let i = 0;
  let j = 0;
  let map = {};
  let max_len = 0;

  while (j < str.length) {
    let char = str[j];
    if (!(char in map)) {
      map[char] = j;
      j++;
    } else {
      let index = map[char];
      max_len = Math.max(j - i, max_len);
      delete map[char];
      if (index >= i) {
        i = index + 1;
      }
    }
  }

  return Math.max(j - i, max_len);
}

function _findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(_findLongestSubstring("bbbb"));
