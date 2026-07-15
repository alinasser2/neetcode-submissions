class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) 
    {
        if (strs.length == 0) return ";"
        let result = ""
        for(let i = 0; i < strs.length; i++)
        {
            result+= strs[i]
            if (i !== strs.length - 1)result+= ";"
        }
        console.log('encoded: ',result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) 
    {
        if (str == ";"){
            console.log('here', str)
             return []
             }
            console.log('here2', typeof str)
        return str.split(";")
    }
}
