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
        let result = true
        let height = (root) => 
        {
            if (!root) return 0
            let right = height(root.right)
            let left = height(root.left)
            if (Math.abs(right - left) >= 2) 
            {
                result = false
            }
            return 1 + Math.max(right, left)
        }
        height(root)
        return result
    }
}
