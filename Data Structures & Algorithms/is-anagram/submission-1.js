class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) 
    {
        if (s.length !== t.length)
        {
            return false
        }

        let buffer  = new Map()
        for (let i = 0; i < s.length; i++)
        {
            if (buffer.has(s[i]))
            {
                buffer.set(s[i], buffer.get(s[i]) + 1) 
            }
            else
            {
                buffer.set(s[i], 0)
            }
        }



        for (let i = 0; i < t.length; i++)
        {
            if (!buffer.has(t[i]))
            {
                return false
            }
            else
            {
                buffer.set(t[i], buffer.get(t[i])-1)
            }
        }


        for (const [key, value] of buffer) {
                if (value !== -1)
                {
                    
                    return false
                }
            }
        return true
    }
}
