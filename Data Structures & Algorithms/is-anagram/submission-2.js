class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) 
    {

        if (s.length !== t.length) return false
        let map = new Map()
        for (let char of s)
        {
            if (!map.has(char))
            {
                map.set(char,1)
            }
            else
            {
                map.set(char,map.get(char)+1)
            }
        }

        console.log(map)


        for (let char of t)
        {
            if (map.has(char))
            {
                if (map.get(char) > 0)
                {
                    map.set(char, map.get(char)-1)
                }
                else return false
            }
            else return false
        }

        console.log(map)

        return true

    }
}
