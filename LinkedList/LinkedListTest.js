import { LinkedListInsert } from "./LinkedListInsert.js";
import { LinkedListPrint } from "./LinkedListPrint.js";
import {LinkedListDelete} from "./LinkedListDelete.js"
import { bubbleSort} from "./LinkedListBubbleSort.js"


//create the object of Linked list insert class 
let linkedList = new LinkedListInsert();

//add items to linked list 
linkedList.addAtEnd(2);
linkedList.addAtEnd(3);
linkedList.addAtEnd(4);
linkedList.addAtEnd(5);
new LinkedListPrint().printList(linkedList.getHead());

linkedList.addAtBeg(7);
linkedList.addAtBeg(12);
linkedList.addAtBeg(14);
new LinkedListPrint().printList(linkedList.getHead());

linkedList.addAtIndex(22, 0);
linkedList.addAtIndex(24, 8);
linkedList.addAtIndex(26, 5);
linkedList.addAtIndex(29, 12);
new LinkedListPrint().printList(linkedList.getHead());


linkedList.addBeforeValue(33, 22);
linkedList.addBeforeValue(38, 24);
linkedList.addBeforeValue(37, 2);
linkedList.addBeforeValue(32, 30);
new LinkedListPrint().printList(linkedList.getHead());


linkedList.addAfterValue(40, 33);
linkedList.addAfterValue(44, 24);
linkedList.addAfterValue(41, 49);
linkedList.addAfterValue(46, 3);
new LinkedListPrint().printList(linkedList.getHead());

let linkedListdel = new LinkedListDelete(linkedList.getHead(), linkedList.getSize());

linkedListdel.deleteFrombeg();
linkedListdel.deleteFrombeg();
linkedListdel.deleteFromEnd();
linkedListdel.deleteFromEnd();
linkedListdel.deleteFromEnd();
new LinkedListPrint().printList(linkedListdel.getHead());
linkedListdel.deleteFromIndex(0);
linkedListdel.deleteFromIndex(10);
linkedListdel.deleteFromIndex(12);
linkedListdel.deleteFromIndex(3);
new LinkedListPrint().printList(linkedListdel.getHead());
linkedListdel.deleteAValue(190);
linkedListdel.deleteAValue(14);
linkedListdel.deleteAValue(4);
linkedListdel.deleteAValue(3);
new LinkedListPrint().printList(linkedListdel.getHead());

//bubble sort 
console.log("Bubblle Sort");
let head = bubbleSort(linkedList.getHead(), linkedList.getSize());

new LinkedListPrint().printList(head);

