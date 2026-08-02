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
        let length = 0
        let current = head
        while (current !== null)
        {
            length++
            current = current.next
        }
        if (length == 1 && n == 1) return null
        console.log('length is', length)
        let target = length - n
        console.log('target is',target)
        let pointer = head
        for(let i = 0; i < target - 1; i++)
        {
            pointer = pointer.next
        }
        console.log('val is', pointer.val)
        if (target == 0)
        {
            console.log('removing the first one')
            head = head.next
            return head
        }
        // let itemToBeRemoved = pointer.next
        // itemToBeRemoved.next = null

        // item in middle
        if (pointer.next !== null && pointer.next.next !== null)
        {
            console.log('first if')
            pointer.next = pointer.next.next
        }
        // item is last 
        else {
            console.log('in else')
            pointer.next = null
        }
        return head
    }
}
