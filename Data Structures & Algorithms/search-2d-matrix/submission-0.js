class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) 
    {
        for (let array of matrix)
        {
            if (this.binarySearchArray(array, target) == true) return true
        }
        return false
        
    }


    binarySearchArray(arr, target)
    {
        let start = 0
        let end = arr.length - 1
        while (start <= end)
        {
            let mid = Math.floor((start + end) / 2)
            if (target == arr[mid]) return true
            else if (target > arr[mid]) start = mid + 1
            else end = mid - 1
        }
        return false
    }
}
