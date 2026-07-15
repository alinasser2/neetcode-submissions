class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) 
    {
        let stack = []
        for (let letter of s)
        {
            console.log(stack)
            if (letter == ')' && stack[stack.length -1] == '(')
            {
                stack.pop()
            }
            else if (letter == '}' && stack[stack.length -1] == '{')
            {
                stack.pop()
            }
            else if (letter == ']' && stack[stack.length -1] == '[')
            {
                stack.pop()
            }
            else
            {
                stack.push(letter)
            }
        }
        console.log(stack)
        return stack.length === 0
    }
}
