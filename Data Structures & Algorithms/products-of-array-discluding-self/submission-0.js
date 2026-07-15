class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) 
    {
        // let prodNums = []
        // let grandProd = 1;
        // for(let i = 0; i < nums.length; i++)
        // {
        //     grandProd *= nums[i]
        // }

        // for(let i = 0; i < nums.length; i++)
        // {
        //     if(nums[i] !== 0)prodNums[i] = grandProd/ nums[i]
        //     else prodNums[i] = grandProd
        // }

        // return prodNums


        let res = []
        for(let i = 0; i < nums.length; i++)
        {
            let prod = 1
            for (let j = 0; j < nums.length; j++)
            {
                if(j !== i) prod *= nums[j]
            }
            res[i] = prod
            prod = 1
        }
        return res
    }
}