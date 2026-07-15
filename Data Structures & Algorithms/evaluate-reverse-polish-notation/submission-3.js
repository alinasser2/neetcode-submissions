class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) 
    {
        let stack = []
        let operations = ["+", "-", "*", "/"]
        let result = 0
        if (tokens.length == 1)
        {
            return tokens[0]
        }
        for (let i = 0; i < tokens.length; i++)
        {
            if (operations.includes(tokens[i]))
            {
                if (tokens[i] == "+")
                {
                    result = parseInt(stack[stack.length-2]) + parseInt(stack[stack.length-1])
                }
                else if (tokens[i] == "-")
                {
                    result = parseInt(stack[stack.length-2]) - parseInt(stack[stack.length-1])
                }
                else if (tokens[i] == "*")
                {
                    result = parseInt(stack[stack.length-2]) * parseInt(stack[stack.length-1])
                }
                else if (tokens[i] == "/")
                {
                    result = parseInt(stack[stack.length-2]) / parseInt(stack[stack.length-1])
                }
                stack.pop()
                stack.pop()
                stack.push(result)
            }
            else
            {
                stack.push(tokens[i])
            }
        }
        return Math.floor(result)
    }
}
