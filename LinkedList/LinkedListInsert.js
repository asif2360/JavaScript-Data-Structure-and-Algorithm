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

    //return the head of the linked list 
    getHead(){
        return this.head;
    }
}