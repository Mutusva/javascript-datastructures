/*
  Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings. The function should return the 
  number of ways that the target can be constructed by concatenating elements of the 'wordBank' array.

  You may reuse elements of the wordBank as many times as needed.
 
  same as canConstruct but return the number of ways to construct the target from word bank.
*/

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let total = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      let numWays = countConstruct(suffix, wordBank, memo);
      total += numWays;
      memo[target] = total;
    }
  }
  memo[target] = total;
  return total;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
