

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


//recursive bubble sort using linked list
export function bSR(head, size, swappedItems) {
   
  let currentNode = head;
  let prevNode = null;
  let nextNode;
  let listSize = size;

  //base case
  if(size == 0 || swappedItems == 0){
      return head;
  }
  swappedItems = 0;

  while(listSize > 1){
    if(currentNode.next){ 
        nextNode = currentNode.next;
        if(currentNode.data > nextNode.data)
        {
            if(prevNode == null){  
                currentNode.next = nextNode.next;
                nextNode.next = currentNode;
                prevNode = head = nextNode;
                swappedItems++;
            } 
            else { 
                prevNode.next = nextNode;
                currentNode.next = nextNode.next;
                nextNode.next = currentNode;
                prevNode = nextNode;
                swappedItems++;
            }
        } else {
 
            prevNode = currentNode;
            currentNode = nextNode;
        }
    } 
    listSize--;
  }


  return bSR(head, size-1, swappedItems);
    
}
 