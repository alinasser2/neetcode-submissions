/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) 
    {
        // get the best on left to the best on right 

        let result = true
        let height = (root) => 
        {
            if (!root) return 0
            let right = height(root.right)
            let left = height(root.left)
            // console.log('root is ',root.val,'right is', right, 'left is', left, 'abs is', Math.abs(right - left))
            if (Math.abs(right - left) >= 2) 
            {
                // console.log('here')
                // return false
                result = false
            }
            return 1 + Math.max(right, left)
        }
        height(root)
        return result
    }
}
