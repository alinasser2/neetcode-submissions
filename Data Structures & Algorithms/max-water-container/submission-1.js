class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) 
    {
        let p1 = 0
        let p2 = heights.length - 1
        let maxArea = 0
        while (p1 < p2)
        {
            let currentArea = Math.min(heights[p1], heights[p2]) * (p2 - p1)
            if (currentArea > maxArea){
                 maxArea = currentArea
                 console.log(p1,p2)
                }
            if (heights[p1] < heights[p2])p1++
            else p2--
        }
        return maxArea
    }   
}
