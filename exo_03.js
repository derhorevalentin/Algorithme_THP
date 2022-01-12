function compare(nums, sum) {
  for (let i = 0; i < nums.length; i++) {
    let diff = sum - nums[i];
    if (nums.includes(diff)) {
      return true;
    }
  }
  return false;
}

const nums = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compare(nums, k));
console.log(compare(nums, l));
