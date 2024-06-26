/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;  
    head.next = null;  
    return newHead; 
};


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let reversedHead = reverseList(head);
while (reversedHead !== null) {
    console.log(reversedHead.val);
    reversedHead = reversedHead.next;
}
