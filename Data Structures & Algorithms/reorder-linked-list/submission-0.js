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
     * @return {void}
     */
    reorderList(head) 
    {
        // fast slow pointers approach so i get the middle of the list
        let fastPointer = head
        let slowPointer = head
        while(fastPointer !== null && fastPointer.next !== null)
        {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
        }

        // revers the second part of the list starting from the slow pointer  
        let cur = slowPointer.next
        let prev = slowPointer.next = null
        while (cur !== null){
            let tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        }

        // using the two pointers start remaping the pointers
        let firstPointer = head
        let secondPointer = prev
        while (secondPointer !== null)
        {
            let tmp1 = firstPointer.next
            let tmp2 = secondPointer.next 
            firstPointer.next = secondPointer
            secondPointer.next = tmp1
            firstPointer = tmp1
            secondPointer = tmp2
        }

        return prev


    }
}
