class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) 
    {
        let p1 = 0
        let p2 = 1
        let maxDiff = 0
        while (p2 < prices.length)
        {
            let diff = prices[p2] - prices[p1] 
            if (diff > maxDiff) 
            {
                maxDiff = diff
            }
            if (prices[p2] < prices[p1])
            {
                p1 = p2
            }
                p2++
        }
        return maxDiff
    }
}
