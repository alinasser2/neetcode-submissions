/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
       let dummy = new ListNode()
       let current = dummy
       let carry = 0
       while (l1 !== null || l2 !== null || carry > 0)
       {
        let l1val = l1?.val ?? 0
        let l2val = l2?.val ?? 0
        let result = l1val + l2val + carry
        
        // 15
        carry = Math.floor(result / 10)
        result = result % 10


        current.next = new ListNode(result)
        current = current.next

        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
       }
       return dummy.next
    }
}
