class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) 
    {
        if (s.length == 0 || s.length == 1) return s.length
        let mySet = new Set();
        mySet.add(s[0])
        let p1 = 0
        let p2 = 1
        let maxLength = 0
        while (p2 < s.length)
        {
            if (mySet.has(s[p2]))
            {
                console.log('here1', p1, p2)
                if (maxLength < p2 - p1)maxLength = p2 - p1
                p1++
                p2 = p1
                mySet = new Set()
            }
            else
            {
                mySet.add(s[p2])
                p2++
            }
        }
        return Math.max(maxLength, p2 - p1)
    }
}
