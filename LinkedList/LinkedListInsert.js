import { LinkedListNode } from "./LinkedListNode.js";

export class LinkedListInsert{

    //initalize a linked list with head equal to null
    constructor(head = null){
        this.head = head;
        this.size = 0;
    }


    //Add an element at the tail of linked list 
    addAtEnd(element){
        //create a new node 
        let newNode = new LinkedListNode(element);
        if(this.head == null){
            this.head = newNode;
            this.size++;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++;
    }


    //Add An Elemeent at the head of linked list 
    addAtBeg(element){
        let newNode = new LinkedListNode(element);
        if(this.head == null){
            this.head = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    //Add an element at given index 
    addAtIndex(element, index){
        //first check if index is in range 
        if(index > this.size || index < 0){
            console.log("Insertion failed! Index out of range");
            return;
        }

        //check if item is being added at the begining of the list 
        if(index == 0){
            this.addAtBeg(element);
            return;
        }

        //check if item is being added at the end of the list 
        if(index == this.size){
            this.addAtEnd(element);
            return;
        }
        let newNode = new LinkedListNode(element);
        let currentNode = this.head;

        while(index > 1){
            currentNode = currentNode.next;
            index--;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }

    addBeforeValue(element, value){

        //first check if value is present at the beginning 
        if(this.head.data == value){
            this.addAtBeg(element);
            return;
        }
        let currentNode = this.head;

        while(currentNode && currentNode.next && currentNode.next.data != value){
            currentNode = currentNode.next;
        }

        //check if value s not present in list 
        if(currentNode == null){
            console.log("Insertion Failed! value is not found in the list");
            return;
        }
        let newNode = new LinkedListNode(element);

        //check if the value present at the end of the list 
        if(currentNode.next != null  && currentNode.next.data == value){
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.size++;
            return;
        } else {
            console.log("Insertion failed! Given value is not found in list");
            return;
        }

       
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }

    //add the given value after the value 
    addAfterValue(element, value){
        let newNode = new LinkedListNode(element);
        if(this.head.data == value){
            newNode.next = this.head.next;
            this.head.next = newNode;
            this.size++;
            return;
        }

        let currentNode = this.head;
        while(currentNode && currentNode.data != value){
            currentNode = currentNode.next;
        }

        if(currentNode == null){
            console.log("Insertion Failed! Value is not present in the list");
            return;
        }

        if(currentNode.next == null){
            this.addAtEnd(element);
            return;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;

    }

    //return the head of the linked list 
    getHead(){
        return this.head;
    }

    //return the size of the linked list 
    getSize(){
        return this.size;
    }
}