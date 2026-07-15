class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) 
    {
        if (nums.length == 0) 
        {
            return 0
        }
        let sortedNums = nums.sort((a, b) => a - b)
        let longestConsecSeq = 1
        let currentConsecSeq = 1
        let p1 = 0
        let p2 = 1
  
        for (let i = 0; i < nums.length; i++)
        {
            if (sortedNums[p2] - sortedNums[p1] == 1)
            {
                console.log(nums[p2])
                p2++
                p1++
                currentConsecSeq++
            }
            else if(sortedNums[p2] == sortedNums[p1])
            {
                p1++
                p2++
            }
            else
            {
                p1=p2
                p2++
                
                if (currentConsecSeq > longestConsecSeq)
                {
                    longestConsecSeq = currentConsecSeq
                }
                currentConsecSeq = 1
            }
        }
        return longestConsecSeq
    }
}


[2,20,4,10,3,4,5]
[2,3,4,4,5,10,20]