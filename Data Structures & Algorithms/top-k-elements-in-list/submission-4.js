class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) 
    {
        let map = new Map();
        let results = []
        for (let number of nums)
        {
            map.set(number, (map.get(number) || 0) + 1)
        }

        let bucket = Array.from({length: nums.length+1}, ()=>[])
        let i = 0
        for (let [number,freq] of map.entries())
        {
            bucket[freq].push(number) 
        }

        for(let j = bucket.length-1; j >= 0 && results.length < k; j--)
        {
            results.push(...bucket[j])
        }

        return results.slice(0,k)
    }
}
