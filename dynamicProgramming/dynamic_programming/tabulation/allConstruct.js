/*
  Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array strings.

  The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 
  wordBank array. Each element of the 2D array should represent one combination that constructs the 'target'e.
*/

const allConstruct = (target, wordBank) => {
  let table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        let newCombinations = table[i].map((subarray) => [...subarray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }
  return table[target.length];
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
