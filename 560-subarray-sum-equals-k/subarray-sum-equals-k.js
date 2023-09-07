/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    let i = 0;

    // Create a hashmap to store cumulative sums and their frequencies
    const cumulativeSums = new Map();
    cumulativeSums.set(0, 1);

    while (i < nums.length) {
        currentSum += nums[i];

        // Check if (currentSum - k) exists in the hashmap
        if (cumulativeSums.has(currentSum - k)) {
            count += cumulativeSums.get(currentSum - k);
        }

        // Update the cumulativeSums hashmap
        if (cumulativeSums.has(currentSum)) {
            cumulativeSums.set(currentSum, cumulativeSums.get(currentSum) + 1);
        } else {
            cumulativeSums.set(currentSum, 1);
        }

        i++;
    }

    return count;
};
