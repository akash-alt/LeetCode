/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expectedSum = (nums.length*(nums.length+1)/2);
    let sum = nums.reduce((a,b)=> a+b,0)
    return expectedSum - sum
};