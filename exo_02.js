function compare(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let canSee = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] >= nums[i]) {
        canSee = false;
        break;
      }
    }
    if (canSee == true) {
      count++;
    }
  }
  return count;
}
const nums1 = [3, 7, 8, 3, 6, 8];
const nums2 = [1, 4, 5, 8];
console.log(compare(nums1));
console.log(compare(nums2));
