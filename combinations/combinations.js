// return all possible combination from a given elements array
// Time complexity 2^n
// Space O(n^2)
// NB* understand tree visualiazation
// Ref:  https://www.youtube.com/watch?v=NA2Oj9xqaZQ, https://www.youtube.com/watch?v=wRH2I6IN4BE&t=1s
const combinations = (elements) => {
  if (elements.length === 0) return [[]];
  const cur = elements[0];
  const rest = elements.slice(1);
  let restComninations = combinations(rest);
  const combsWithFirst = [];
  restComninations.forEach((comb) => {
    const combWithFirst = [...comb, cur];
    combsWithFirst.push(combWithFirst);
  });

  return [...restComninations, ...combsWithFirst];
};

console.log(combinations(["a", "b", "c"]));
