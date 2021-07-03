import { LinkedListNode  } from "./LinkedListNode.js";

class LinkedList{

    //intialize the LinkedList data members inside the contructor
    constructor(head = null)
    {
        this.head = head;
        this.size = 0;
    }

    //Add an element at the end of the LinkedList
    addAtEnd(element)
    {
        let newNode = new LinkedListNode(element);
        if(this.head == null)
        {
            this.head = newNode; 
            this.size++;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next)
        {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++;
    }

    //Add element at the begginng of the linked List
    addAtBeg(element)
    {
        let newNode = new LinkedListNode(element);
        if(this.head == null)
        {
            this.head = newNode; 
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    //Add element at the given index
    addAfterIndex(element, index){
        let newNode = new LinkedListNode(element);
        if(index > this.size || index < 0)
        {
            console.log("can Not insert the element at index out of range");
            return;
        }

        if(index == this.size){
            this.addAtEnd(element);
            return;
        }
        let currentNode = this.head
        let currentIndex = 0;
        while(currentIndex < index){
         
            currentNode = currentNode.next;
            currentIndex++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;   
    }

    //add element after the given element
    addAfterValue(element, value){
        let newNode = new LinkedListNode(element);
        let currentNode = this.head;
        while(currentNode && currentNode.data != value ) {
            currentNode = currentNode.next;
        }
        if(currentNode != null){
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.size++;
        }else {
            console.log("Given Value is not present in List");
        }
      
    } 

    //delete a value from the end of the linkedlist
    deleteFromEnd(){
        if(this.head == null){
            console.log("Deletion Failed! List is already Empty");
            return;
        }

        let currentNode = this.head;
        while(currentNode.next.next){
            currentNode = currentNode.next;
        }

        currentNode.next = null;
        this.size--;
    }


    //delete a value from the start 
    deleteFromStart(){
        if(this.head == null){
            console.log("Deletion Failed! List is already empty");
            return;
        }

        let currentNode = this.head;
        this.head = currentNode.next;
        this.size--;

    }

    //delete a value from a given index
    deleteFromIndex(index){
        if(index > this.size || index < 0){
            console.log("Deletion Failed! index is out of range");
            return;
        }
        if(this.head == null)
        {
            console.log("Deletion Failed! List is already empty");
            return;
        }

        if(index == 0){
            this.deleteFromStart();
            return;
        }
        let currentNode = this.head;
        while(index > 1){
            currentNode = currentNode.next;
            index--;
        }
        currentNode.next = currentNode.next.next;
        this.size--;
    }

    //this method is used to delete a value from the given linked list 
    deleteAVal(value){

        let currentNode = this.head;

        //If the value is present at the beginning of the list 
        if(currentNode.data == value){
            this.deleteFromStart();
            return;
        }
        while(currentNode && currentNode.next && currentNode.next.data != value){
            currentNode = currentNode.next;
        }
        // if the value present at the end of the loop 
        if(currentNode.data == value && currentNode.next == null){
            this.deleteFromEnd();
            return;
        } else {
            currentNode.next = currentNode.next.next;
            this.size--;
        }
    }

    //print the content of linked list 
    print()
    {
        let headNode = this.head;     
        while(headNode)
        {
            let data = headNode.data; 
            process.stdout.write(data + " ");
            headNode = headNode.next;
        }
        console.log();
    }

    //get the size of the LinkedList
    getSize(){
        return this.size;
    }
}

var linkList = new LinkedList();

//all type of addition operation
linkList.addAtEnd(5);
linkList.addAtEnd(15);
linkList.addAtEnd(25);
linkList.addAtEnd(35);
linkList.addAtEnd(53);
linkList.addAtBeg(4); 
linkList.addAfterIndex(17, 6);  
linkList.addAfterValue(23, 17);
console.log("Size", linkList.getSize()); 
linkList.print();

//all delete operation
linkList.deleteFromEnd(); 
linkList.deleteFromStart();
linkList.deleteFromIndex(0);
linkList.print();
linkList.deleteAVal(25);

//sorting operation



//searching operation



console.log("Size", linkList.getSize());

linkList.print();

