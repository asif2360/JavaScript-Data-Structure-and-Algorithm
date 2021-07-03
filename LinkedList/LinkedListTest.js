import { LinkedListInsert } from "./LinkedListInsert.js";
import { LinkedListPrint } from "./LinkedListPrint.js";


//create the object of Linked list insert class 
let linkedList = new LinkedListInsert();

//add items to linked list 
linkedList.addAtEnd(2);
linkedList.addAtEnd(3);
linkedList.addAtEnd(4);
linkedList.addAtEnd(5);
linkedList.addAtBeg(7);
linkedList.addAtBeg(12);
linkedList.addAtBeg(14);

//print the items in linked list 
new LinkedListPrint().printList(linkedList.getHead());