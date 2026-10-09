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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) 
    {


        let result = true
        if (!p && !q) return true
        let check = (p,q) => 
        {
            if (!p && !q) return
            if (p && !q) result = false 
            if (!p && q) result = false 
            if ((p && q) && p.val !== q.val && result !== false)
            {
                result = false
            }
            // if (p && q)
            // {
                console.log(p?.val, q?.val)
                check(p?.right, q?.right)
                check(p?.left, q?.left)   

            // }
        }

        check(p,q)
        return result
    }
}
