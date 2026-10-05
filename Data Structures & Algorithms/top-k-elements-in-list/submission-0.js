class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) 
    {
        let map = new Map();
        for (let number of nums)
        {
            map.set(number, (map.get(number) || 0) + 1)
        }

        console.log([...map.entries()])
        return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]); 
    }
}
