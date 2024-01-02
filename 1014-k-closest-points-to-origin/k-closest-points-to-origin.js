/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let dist = function(x, y) {
        return x * x + y * y;
    };

    let maxHeap = new MaxPriorityQueue();

    for (let [x, y] of points) {
        let d = dist(x, y);
        maxHeap.enqueue([x, y], d);
        if (maxHeap.size() > k) {
            maxHeap.dequeue();
        }
    }

    let res = [];
    while (maxHeap.size()) {
        res.push(maxHeap.dequeue().element);
    }

    return res;
};
