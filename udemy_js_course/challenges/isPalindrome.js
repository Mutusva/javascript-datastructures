function isPalindrome_sln(str) {
  // add whatever parameters you deem necessary - good luck!
  function helper(val, i, j) {
    if (i >= j) return true;
    if (!val) return false;

    if (val[i] !== val[j]) return false;
    return helper(val, ++i, --j);
  }

  return helper(str, 0, str.length - 1);
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(isPalindrome("tcat"));
