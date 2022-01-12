function compare(nums) {
  let count = 0;
  let result = 1;
  let num_max = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 1; i--) {
    count++;
    if (nums[i] > num_max) {
      result++;
      num_max = nums[i];
    }
  }
  return [result, count];
}

const nums1 = [3, 7, 8, 3, 6, 1];
const nums2 = [1, 4, 5, 8];
console.log(compare(nums1));
console.log(compare(nums2));
