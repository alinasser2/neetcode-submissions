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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) 
    {
        // if(head.next == null && n == 1) return null
        let dummyHead = new ListNode(0);
        dummyHead.next = head
        let leftPointer = dummyHead
        let rightPointer = head
        for(let i = 0; i < n; i++)
        {
            rightPointer = rightPointer.next
        }
        while (rightPointer != null)
        {
            rightPointer = rightPointer.next
            leftPointer = leftPointer.next
        }
        leftPointer.next = leftPointer.next.next
        return dummyHead.next

    }
}
