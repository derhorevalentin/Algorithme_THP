const nums = [10, 15, 3, 7];
const nums2 = [9, 1, 10, 8];
const k = 17;
const l = 19;

const sum = (nums, k) => nums.filter((e) => nums.includes(k - e)).length > 1;

console.log(sum(nums, k));
console.log(sum(nums2, l));
