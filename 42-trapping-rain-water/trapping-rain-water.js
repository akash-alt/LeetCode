/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    //* Solution is good
    // let trappedWater = 0;
    // for (let i = 0; i < height.length; i++) {
    //     let leftMax = 0;
    //     let rightMax = 0;
    //     // Find the maximum height to the left of the current position
    //     for (let j = i; j >= 0; j--) {
    //         leftMax = Math.max(leftMax, height[j]);
    //     }
    //     // Find the maximum height to the right of the current position
    //     for (let k = i; k < height.length; k++) {
    //         rightMax = Math.max(rightMax, height[k]);
    //     }
    //     // Calculate the amount of trapped water at the current position
    //     trappedWater += Math.min(leftMax, rightMax) - height[i];
    // }
    // return trappedWater;


    //*********************************************************** *//
    //* M-2 Optimize solution
    let i=0, j=height.length-1,maxLeft=0,maxRight=0;
    let totalTrapWater=0;
    while(i<j){
        if(height[i]<=height[j]){
            maxLeft=Math.max(maxLeft,height[i])
            totalTrapWater+=maxLeft-height[i];
            i++;
        }
         else{
            maxRight=Math.max(maxRight,height[j])
            totalTrapWater+=maxRight-height[j];
            j--;
        }
    }
    return totalTrapWater;

};