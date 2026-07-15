class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) 
    {
        let p1 = 0
        let p2 = 1
        let result = []
        let maxResult = 1
        while (p1 < temperatures.length)
        {
            if (temperatures[p1] < temperatures[p2])
            {
                
                result.push(maxResult)
                p1++
                p2 = p1+1
                maxResult = 1

            }
            else if (p2 < temperatures.length)
            {
                maxResult++
                p2++
            }
            else
            {
                result.push(0)
                p1++
                p2 = p1+1
                maxResult = 1
            }
        }
        return result
    }
}
