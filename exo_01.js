function compare(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == k) {
        return true;
      }
    }
  }
  return false;
}

const nums = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compare(nums, k));
console.log(compare(nums, l));
