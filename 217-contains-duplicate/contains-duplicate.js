/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // M-1
   
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true; // Found a duplicate
            }
        }
    }
    return false
    // return false;
    /*  Time O(n^2) | Space O(N) */

    // const numsSet = new Set(nums);
    // const isEqual = numsSet.size === nums.length;
    // return !isEqual;
    /* Time O(N) | Space O(N) */
};