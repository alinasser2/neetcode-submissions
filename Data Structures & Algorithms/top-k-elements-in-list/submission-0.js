class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) 
    {
        let freq = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (freq.has(nums[i]))
            {
                freq.set(nums[i],freq.get(nums[i])+1)
            }
            else
            {
                freq.set(nums[i],1)
            }
        }

        let arr = Array.from(freq.entries());

        arr.sort((a, b) => b[1] - a[1]);

        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(arr[i][0]);
        }

        return result;

    }
}
