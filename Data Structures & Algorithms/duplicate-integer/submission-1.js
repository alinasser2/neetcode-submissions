class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) 
    {
        let buffer = new Set()
        for (let num of nums)
        {
            if (buffer.has(num))
            {
                return true
            }
            else 
            {
                buffer.add(num)
            }
        }
        return false
    }
}
