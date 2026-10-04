class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) 
    {
        let p1 = 0
        let p2 = s.length
        if(s.trim() == "") return true
        if(s.length == 1) return true
        while (p1 < p2)
        {
            while(!this.isAlphanumeric(s[p2]) && p2 > p1)p2--
            while(!this.isAlphanumeric(s[p1]) && p1 < p2)p1++
            if (s[p1].toLowerCase() !== s[p2].toLowerCase()) 
            {
                console.log('s[p1] is : ', s[p1], 's[p2] is : ', s[p2])
                return false
            }
            else 
            {
                p1++
                p2--
            }
        }
        return true
    }


    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
