class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) 
    {
        let prefix = []
        let suffex = []
        let result = []
        for (let i = 0; i < nums.length; i++)
        {
            let prev = i == 0 ? 1 : prefix[i-1]
            prefix[i] = nums[i] * prev
        }

        // console.log('prefix is : ', prefix)

        for (let i = nums.length -1 ; i >= 0 ; i--)
        {
            let next = i == nums.length - 1 ? 1 : suffex[i+1]
            suffex[i] =  nums[i] * next
        }

        for (let i = 0; i < nums.length; i++)
        {
            // suffex i + 1
            // prefix i - 1
            let prevProd = i-1 < 0 ? 1 : prefix[i-1]
            let nextProd = i+1 > nums.length-1 ? 1 : suffex[i+1]
            result.push(prevProd * nextProd)
        }
        return result


    }
}


//[1,2,4,6]
// prefix [1,2,8,48]
// suffex [48,48,24,6]