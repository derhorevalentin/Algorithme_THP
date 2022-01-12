function compare(nums) {
  let count = 1;
  let num_max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums.length) {
      count++;
      num_max = nums[i];
    }
  }

  return count;
}

const nums1 = [3, 7, 8, 3, 6, 1];
const nums2 = [1, 4, 5, 8];
console.log(compare(nums1));
console.log(compare(nums2));
