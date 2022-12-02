let arr = [2,1,5,4,6]
let target = 9

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log("input: nums = " + arr + ", target = " + target);
console.log("output : " + twoSum(arr, target));