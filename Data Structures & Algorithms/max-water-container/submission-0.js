class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) 
    {
        let max = 0;
        let p1 = 0
        let p2 = heights.length
        while (p1 < p2)
        {
            let area = (p2 - p1) * Math.min(heights[p1],heights[p2]);
            // console.log('area is', max)
            if (area > max) 
            {
                // console.log('max is', max)
                max = area
            }
            if (heights[p1] < heights[p2]) p1++
            else p2--
        }  
        return max
    }
}
