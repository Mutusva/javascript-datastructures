/*
  Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array strings.

  The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 
  wordBank array. Each element of the 2D array should represent one combination that constructs the 'target'e.
*/

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let suffixWays = allConstruct(suffix, wordBank);
      let targetWays = suffixWays.map((way) => [word, ...way]); // add a word to each way.
      result.push(...targetWays);
    }
  }
  return result;
};

const allConstruct_memo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let suffixWays = allConstruct_memo(suffix, wordBank, memo);
      let targetWays = suffixWays.map((way) => [word, ...way]); // add a word to each way.
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct_memo("purple", ["purp", "p", "ur", "le", "purpl"]));

console.log(
  allConstruct_memo("enterapotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ])
);

console.log(
  allConstruct_memo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
