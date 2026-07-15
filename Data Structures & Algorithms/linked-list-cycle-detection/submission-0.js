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
     * @return {boolean}
     */
    hasCycle(head) 
    {
        let slowPointer = head
        let fastPointer = head
        let counter = 0 
        while(fastPointer !== null)
        {
            console.log('fast point is:', fastPointer)
            console.log('slow point is:', slowPointer)
            fastPointer = fastPointer.next
            if (counter % 2 == 1)
            {
                slowPointer = slowPointer.next
            }
            if (fastPointer == slowPointer)
            {
                return true
            }
            counter++
        }
        return false
    }
}
