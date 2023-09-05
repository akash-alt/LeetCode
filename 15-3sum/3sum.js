/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
//   const result = [];
//   // Sort the input array
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   return result;

//**************************************** *//
// var threeSum = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[left] + nums[right];

      if (sum > -nums[i]) {
        right--;
      } else if (sum < -nums[i]) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] == nums[left + 1]) left++;
        while (nums[right] == nums[right - 1]) right--;
        right--;
        left++;
      }
    }

    while (nums[i] == nums[i + 1]) i++;
  }

  return res;
};

