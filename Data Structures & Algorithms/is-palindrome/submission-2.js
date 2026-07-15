class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) 
    {
        let sWithoutSpaces = s.replace(/[^a-zA-Z0-9]/g,'')
        let p1 = 0 
        let p2 = sWithoutSpaces.length-1
        while (p1 < p2)
        {
            console.log
            if (sWithoutSpaces[p1].toLocaleLowerCase() != sWithoutSpaces[p2].toLocaleLowerCase())
            {
                return false
            }
            p1++
            p2--
        }
        return true
    }

}
