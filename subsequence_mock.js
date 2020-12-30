function minSubsequence(S, T) {
  let i = 0;
  let j = 0;
  let start = 0;
  let end = 0;

  while (j < S.length) {
    if (S[j] !== T[i]) start++;
  }
}
