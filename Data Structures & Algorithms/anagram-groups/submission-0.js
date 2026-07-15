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
            console.log(sortedStr)
            if (result[sortedStr])
            {
                result[sortedStr].push(str)
            console.log('here1', str)
            }
            else
            {
                result[sortedStr] = []
                result[sortedStr].push(str)
            }
            console.log('result is : ', result)
        }
        return Object.values(result)
    }
}
