class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) 
    {
        let result = []
        let sortedNums = nums.sort((a,b) => a-b )
        for (let i = 0; i < nums.length; i++)
        {
            if (i > 0 && nums[i] == nums[i-1]) continue
            let target = -nums[i]
            let subResult = this.twoSum(sortedNums.slice(i+1), target)
            if (subResult) {
                console.log(subResult)
                for (let k = 0; k < subResult.length; k++)
                result.push([nums[i], ...subResult[k]])
            }
        }
        return result
    }

    twoSum(numbers, target) 
    {
        let p1 = 0
        let p2 = numbers.length-1
        let result = []
        while(p1 < p2)
        {
            if (target < numbers[p1] + numbers[p2])
            {
                p2--
            }
            else if(target > numbers[p1] + numbers[p2])
            {
                p1++
            }
            else 
            {
                console.log('pushing', [numbers[p1], numbers[p2]])
                result.push([numbers[p1], numbers[p2]])
                p2--
                p1++
                while (p1 < p2 && numbers[p1] === numbers[p1 - 1]) p1++;
                while (p1 < p2 && numbers[p2] === numbers[p2 + 1]) p2--;
            }
        }
        console.log('result is', result)
        return result
    }
}
