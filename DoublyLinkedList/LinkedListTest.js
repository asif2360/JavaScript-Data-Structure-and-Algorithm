import { LinkedListInsert } from "./LinkedListInsert.js";


let doubleList = new LinkedListInsert();
doubleList.insert(1);
doubleList.insert(2);
doubleList.insert(3);
doubleList.insert(4);
doubleList.insert(5);
doubleList.insert(6);

doubleList.printList(doubleList.getHead());
doubleList.printListReverse(doubleList.getTail());
doubleList.delete();
doubleList.delete();
doubleList.delete();
doubleList.delete();
doubleList.delete(); 
doubleList.printList(doubleList.getHead());