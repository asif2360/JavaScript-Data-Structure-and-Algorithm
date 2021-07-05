

//iterative bubble sort using linked list
export  function bubbleSort(head, size){
     
    for(let i=0; i<size-1; i++){

        let prevNode = null;
        let currentNode = head;
        let nextNode;

        while(currentNode != null && currentNode.next != null)
        {
            if(currentNode.data > currentNode.next.data)
            {
                if(prevNode == null){
                    nextNode = currentNode.next;
                    currentNode.next = nextNode.next;
                    nextNode.next = currentNode;
                    prevNode = head = nextNode;
                } 
                else {
                    nextNode = currentNode.next;
                    prevNode.next = nextNode;
                    currentNode.next = nextNode.next;
                    nextNode.next = currentNode;
                    prevNode = nextNode;
                }
            } else {

                nextNode = currentNode.next;
                prevNode = currentNode;
                currentNode = nextNode;
            }
        }
     
    }

    return head;
}
 