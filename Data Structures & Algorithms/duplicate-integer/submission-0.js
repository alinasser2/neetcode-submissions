class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) 
    {
        let hashList = new Set()
        for (let i = 0; i < nums.length; i++)
        {
            if (hashList.has(nums[i]))
            {
                return true
            }
            else
            {
                hashList.add(nums[i])
            }
        }
        return false
    }
}
