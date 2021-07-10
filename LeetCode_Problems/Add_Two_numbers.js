function ListNode(val, next){
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
}

//iterative approach 
let addTwoNumbers_I = function(l1, l2){

    let head, curr = null;
    let extra = 0;
    let nodeSum = 0;

    while(l1 || l2){
        nodeSum = 0;
        let newNode = new ListNode();
        if(head == null){
            head = newNode;
            curr = head;
        } else {
            curr.next = newNode;
            curr = newNode;
        }

        nodeSum = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + extra;
        curr.val = nodeSum % 10;
        extra = Math.floor(nodeSum / 10);

        l1 = l1 == null ? l1 : l1.next;
        l2 = l2 == null ? l2 : l2.next;
    }
    if(extra){
        curr.next = new ListNode(extra);
    }

    return head;
}



//recursive approach
let addTwoNumbers_R = function(l1, l2){

    let carry = 0;
     
    function result(l1, l2){

        if(l1 == null && l2 == null && carry == 0 ){
            return null;
        }
    
        val1 = l1 != null ? l1.val : 0;
        val2 = l2 != null ? l2.val : 0;
    
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
    
        l1 = l1 == null ? l1 : l1.next;
        l2 = l2 == null ? l2 : l2.next
        let ans = new ListNode(sum%10, result(l1, l2));
        return ans;
    }

    return result(l1, l2);
}
