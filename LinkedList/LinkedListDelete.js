import { LinkedListNode } from "./LinkedListNode.js";

export class LinkedListDelete{

    constructor(head, size){
        this.head = head;
        this.size = size;
    }

    //delete a single node from the beginning of the list
    deleteFrombeg(){

        if(this.head == null){
            console.log("Deletion Failed! List is already empty");
            return;
        }

        //if there is only one element
        if(this.head.next == null){
            this.head = null;
            this.size--;
            return;
        }

        this.head = this.head.next;
        this.size--;
    }

    //delete a node from the end of the list 
    deleteFromEnd(){
        if(this.head == null){
            console.log("Deletion Failed! List is already empty");
            return;
        }

        //if there is only one element
        if(this.head.next == null){
            this.head = null;
            this.size--;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next.next){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.size--;
    }

    //delete a node from given index of linked List 
    deleteFromIndex(index){
        if(index > this.size || index < 0){
            console.log("Deletion Failed! index is out of range");
            return;
        }
        if(index == 0){
            this.deleteFrombeg();
            return;
        } else if( index == this.size){
            this.deleteFromEnd();
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

    //delete a given value from linked list 
    deleteAValue(value){

        if(this.head.data == value){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let currentNode = this.head;
        while(currentNode&& currentNode.next && currentNode.next.data != value){
            currentNode = currentNode.next;
        }
        if(currentNode.next == null ){
            console.log("Deletion Failed! Value is not present in list");
            return;
        } 
        currentNode.next = currentNode.next.next;
        this.size--;

    }
     
    getHead(){
        return this.head;
    }

    getSize(){
        return this.size;
    }

}