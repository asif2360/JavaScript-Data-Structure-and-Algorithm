import { LinkedListInsert } from "./LinkedListInsert.js";
import { LinkedListPrint } from "./LinkedListPrint.js";


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
linkedList.addBeforeValue(32, 30);
new LinkedListPrint().printList(linkedList.getHead());
