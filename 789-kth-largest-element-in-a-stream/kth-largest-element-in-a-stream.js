/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function(k, nums) {
//     this.k = k, this.nums = nums;
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function(val) {
//     this.nums.push(val)
//     return this.nums.sort((a,b)=> b-a)[this.k-1]
    
// };

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//  var KthLargest = function(k, nums) {
//     this.k = k;
//     this.minHeap = [];

//     for (const num of nums) {
//         this.add(num);
//     }
// };

// KthLargest.prototype.add = function(val) {
//     if (this.minHeap.length < this.k) {
//         // If the heap size is less than k, just push the value
//         this.minHeap.push(val);
//         this.minHeap.sort((a, b) => a - b);
//     } else if (val > this.minHeap[0]) {
//         // If the value is greater than the smallest element in the heap
//         this.minHeap.shift();
//         this.minHeap.push(val);
//         this.minHeap.sort((a, b) => a - b);
//     }

//     return this.minHeap[0];
// };


//**************************************************************** *//

/** 
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * Time O(N * (K * log(K))) | Space O(K)
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
 class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     * @constructor
     */
    constructor(k, nums) {
        this.k = k
        this.minHeap = new MinPriorityQueue();

        nums.forEach((num) => this.add(num))
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val, { minHeap } = this) {
        const isUnderCapacity = minHeap.size() < this.k;
        if (isUnderCapacity) {
            minHeap.enqueue(val);
        
            return this.top();
        }

        const isLarger = this.top() < val;
        if (isLarger) {
            minHeap.dequeue()
            minHeap.enqueue(val);
        }
        
        return this.top();
    }

    top ({ minHeap } = this) {
        return minHeap.front()?.element || 0
    }
}


