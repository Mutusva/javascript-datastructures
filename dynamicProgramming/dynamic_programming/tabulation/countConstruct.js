/*
  Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings. The function should return the 
  number of ways that the target can be constructed by concatenating elements of the 'wordBank' array.

  You may reuse elements of the wordBank as many times as needed.
*/

const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      //if the word matches the characters starting at position i
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
