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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) 
    {
        let p1 = list1
        let p2 = list2
        let result = null
        let head = null
        if (p1 == null && p2==null) return null
        if (p1 == null) return p2
        if (p2 == null) return p1
        if (p1.val < p2.val) 
        {
            result = p1
            p1 = p1.next
        }
        else 
        {
            result = p2
            p2 = p2.next
        }
        head = result
        while(p1 !== null && p2 !== null)
        {
            console.log(p1.val)
            console.log(p2.val)
            console.log('comparing', p1.val < p2.val)
            if (p1.val < p2.val)
            {
                result.next = p1
                result = result.next
                p1 = p1.next
            }
            else 
            {
                result.next = p2
                result = result.next
                p2 = p2.next
            }
        }

        if (p1 !== null) {
            result.next = p1;
        } else {
            result.next = p2;
        }

        return head
    }
}
