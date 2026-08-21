class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) 
    {
        let checkSet = new Set()
        for (let num of nums)
        {
            if (checkSet.has(num)) {
                return num;
            }
            checkSet.add(num);
        }


    }
    // [1,2,3,2,2]
}
