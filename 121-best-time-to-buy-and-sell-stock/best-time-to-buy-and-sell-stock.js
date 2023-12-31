/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

   //* M-1 
//    let buy = prices[0];
//    prices[0] = 0;
//    let profit = 0;
//    for(let i=1;i<prices.length;i++){
//        if(buy > prices[i]){
//            buy = prices[i];
//            prices[i] = 0;
//        }else{
//            profit = Math.max(prices[i] - buy,profit)
//        }
//    }
//    return profit;


//* M-2

    // let minstockPurchasePrice = prices[0] 
    // prices[0] = 0
    // let profit = 0;
    // for(let i=1;i<prices.length;i++){
    //     if(minstockPurchasePrice > prices[i]){
    //         minstockPurchasePrice = prices[i]
    //         prices[i] = 0
    //     }
    //     profit = Math.max(prices[i] - minstockPurchasePrice,profit)
    // }
    // return profit;

//* M-3
 let [left, right, max] = [0, 1, 0];
    while (right < prices.length) {
        const canSlide = prices[right] <= prices[left];
        if (canSlide) left = right;

        const window = prices[right] - prices[left];

        max = Math.max(max, window);
        right++;
    }
    return max;
};

// maxProfit([7,1,5,3,6,4])