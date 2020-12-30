// Multiple pointers -- isSubsequence
function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if (str2.length < str1.length) return false;

  let i = 0;
  let j = 0;

  let result = "";
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      result += str2[j];
      i++;
      j++;
    } else {
      j++;
    }
  }

  console.log(result);
  return result === str1;
}

//more elegant solution
function isSubsequence02(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence_rec(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0])
    return isSubsequence_rec(str1.slice(1), str2.slice(1));
  return isSubsequence_rec(str1, str2.slice(1));
}
console.log(isSubsequence("abc", "abrc"));
