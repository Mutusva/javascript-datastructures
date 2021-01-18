var threeSum = function (nums) {
  let result = [];
  nums.sort();

  let map = {};
  let set = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) k--;
      else if (sum < 0) j++;
      else {
        if (!map[j + "," + k]) {
          map[j + "," + k] = { j: nums[j], k: nums[k] };
          set.add([nums[i], nums[j], nums[k]]);
        }
        j++;
        k--;
      }
    }
  }
  let s = Array.from(set);
  return [...s];
};

let nums = [0, 0, 0, 0];
console.log(threeSum(nums));
