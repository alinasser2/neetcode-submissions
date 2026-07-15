class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) 
    {
        let result = [];
        for(let str of strs)
        {
            let sortedStr = str.split('').sort().join('')
            if (!result[sortedStr])
            {
                result[sortedStr] = []
            }
            result[sortedStr].push(str)
        }
        return Object.values(result)
    }
}
