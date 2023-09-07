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

//******************************************** *//

    // for(let i=0;i<nums.length;i++){
    //     let sum = nums[i];
    //     if(sum === k){
    //         return [nums[i]];
    //     }
    //     for (let j = i + 1; j < nums.length; j++) {
    //         sum += nums[j]; //* sum = sum+nums[j];
    //         if (sum === k) {
    //             return nums.slice(i, j + 1); 
    //         }
    //     }
    // }
    // return null

//* M-2

    // let counter = 0;
    // for (let i=0;i<nums.length;i++) {
    //     let base = 0;
    //     for (let j=i;j<nums.length;j++) {
    //         base+=nums[j]; //*  sum = sum+nums[j]
    //         if (base == k) counter++;
    //     }
    // }
    // return counter;
};
