/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    //* M-1
    let [left, right] = [0, numbers.length - 1];
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        if (sum < target) left++;
        if (sum>target) right--;
    }
    return null;

    //* M-2
    // for (let i = 0; i < numbers.length - 1; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) {
    //           return [i + 1, j + 1]; // Adjust indices to be 1-based
    //      }
    //   }
    // }
    // return null; // If no solution is found

};