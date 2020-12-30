function flatten(arr) {
  let res = [];
  return helper(arr, res);
}

var helper = (arr, result) => {
  if (arr.length === 0) return result;

  let cur = arr[0];

  if (Object.keys(cur).length !== 0) {
    helper(cur, result);
    helper(arr.slice(1), result);
  } else {
    result.push(cur);
    helper(arr.slice(1), result);
  }

  return result;
};

function flatten_sln(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten_sln([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
