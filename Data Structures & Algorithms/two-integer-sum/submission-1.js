class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) 
    {
        let map = {}
        for(let i = 0; i < nums.length; i++)
        {
            map[nums[i]] = i
        }

        console.log(map)

        for(let i = 0; i < nums.length; i++)
        {
            let dif = target - nums[i]
            if (map[dif] != undefined && map[dif] != i)
            {
                return [i, map[dif]]
            } 
        }
        return[]
    }
}
