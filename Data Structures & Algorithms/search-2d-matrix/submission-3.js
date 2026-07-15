class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) 
    {
        let start = 0
        let end = matrix.length * matrix[0].length - 1
        
        while (start <= end)
        {
            let mid = Math.floor((start + end) / 2)
            let midX = Math.floor(mid / matrix[0].length)
            let midY = mid % matrix[0].length 
            console.log(`mid is: [${midX}] [${midY}] = ${matrix[midX][midY]}` )
            if (target == matrix[midX][midY]) return true
            else if (target > matrix[midX][midY]) start = mid + 1
            else end = mid - 1
        }
        return false
    }
}
