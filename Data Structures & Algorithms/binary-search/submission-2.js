class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) 
    {
        let start = 0
        let end  = nums.length - 1
        let mid = Math.floor(nums.length / 2)
        while (start <= end)
        {
            if (nums[mid] == target) return mid
            else if (target < nums[mid]) 
            {
                end = mid - 1
                mid = Math.floor((start + end) / 2)
            }
            else 
            {
                start = mid + 1
                mid = Math.floor((start + end) / 2)
            }
        }
        return -1
        
    }
}
