class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) 
    {
        let map  = new Map();
        
        if (strs.length == 0) return []
        if (strs.length == 1) return [strs[0]]
        for (let word of strs)
        {
            let sortedWord = word.split('').sort().join('')
            if (map.has(sortedWord)) map.set(sortedWord,[...map.get(sortedWord), word])
            else map.set(sortedWord,[word])
        }
        return [...map.values()];
    }
}
