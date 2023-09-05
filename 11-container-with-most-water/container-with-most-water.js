/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxima = 0;

    while(left < right){
        let width = (right-left);
        let maxArea = Math.min(height[left], height[right])*width;
        maxima = Math.max(maxima,maxArea);

        if(height[left] <= height[right]){
            left++
        }else{
            right--
        }
    }
    return maxima;

    //******************************************** *//
    //* M-2
    // let maxima = 0;
    // // Iterate through all possible pairs of lines
    // for (let i = 0; i < height.length - 1; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         // Calculate the width (distance between the lines)
    //         let width = j - i;
    //         // Calculate the minimum height between the two lines
    //         let minHeight = Math.min(height[i], height[j]);
    //         // Calculate the area and update maxima if it's greater
    //         let area = width * minHeight;
    //         maxima = Math.max(maxima, area);
    //     }
    // }
    // return maxima;
};