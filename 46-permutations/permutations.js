/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const backtrack = (currentPermutation) => {
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]);
            return;
        }

        for (let num of nums) {
            if (!currentPermutation.includes(num)) {
                currentPermutation.push(num);
                backtrack(currentPermutation);
                currentPermutation.pop();
            }
        }
    };

    backtrack([]);

    return result;
};
