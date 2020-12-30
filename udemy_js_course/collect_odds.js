function collectOddesHelper(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }

  helper(arr);
  return result;
}

collectOddesHelper([1, 2, 5, 7, 9, 8, 6]);

function collect_odded_pure_recursion(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collect_odded_pure_recursion(arr.slice(1)));
  return newArr;
}

function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.splice(1));
}

console.log(collect_odded_pure_recursion([1, 2, 5, 7, 9, 8, 6, 4, 13]));
