/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minstockPurchasePrice = prices[0] || 0
    let profit = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]<minstockPurchasePrice){
            minstockPurchasePrice = prices[i]
        }
        profit = Math.max(profit,prices[i] - minstockPurchasePrice)
    }
    return profit;
};
maxProfit([7,1,5,3,6,4])