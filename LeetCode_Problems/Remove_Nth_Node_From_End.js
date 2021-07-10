//My Approach
let removeNthNode = function(head, n){
   
    if(head.next == null){
        return null;
    }

    let size = 0;
    let currNode = head;
    while(currNode){
        size++;
        currNode = currNode.next;
    }

    if(size == n){
        return head = head.next;
    }

    let counter = size - n;
    currNode = head;
    while(counter > 0){
        currNode = currNode.next;
    }
    currNode.next = currNode.next.next;

    return head;
}

//More Optimized two pointer method
let removeNthNode2 = function (head, n){

    if(head.next==null){
        return null;
    }

    let fast = head;
    let slow = head;

    for(let i=0; i<n; i++){
        fast = fast.next;
    }

    if(fast == null){
        return slow.next;
    }

    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;

}