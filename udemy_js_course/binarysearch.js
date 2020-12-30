let arr = [1, 3, 4, 6, 9, 11, 22, 36];

function binarySearch(list, num) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (list[mid] === num) {
      return mid;
    } else if (list[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function rec_binarySearch(list, num) {
  return binsearch_helper(list, num, 0, list.length - 1);
}

var binsearch_helper = (list, num, start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);

  if (list[mid] === num) return mid;

  if (list[mid] < num) return binsearch_helper(list, num, mid + 1, end);
  else return binsearch_helper(list, num, mid, end - 1);
};

console.log(rec_binarySearch(arr, 21));
