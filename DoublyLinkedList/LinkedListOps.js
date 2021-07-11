import { ListNode } from "./ListNode.js";

export class LinkedListInsert{

    constructor(){
        this.head = null;
        this.tail = null;
    }

//insert element into linkedlist
insert = function(value){

    let node = new ListNode(value);

    if(this.head == null){
        this.head = node;
        this.tail = this.head;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = this.tail.next;
    }
}


delete = () =>{

    if(this.head == null){
        return ;
    }

    if(this.head == this.tail){
        this.head = null;
        this.tail = null;
        return;
    }
   
    this.tail = this.tail.prev;
    this.tail.next = null;
}

//traverse list
printList = function(head){
   
    let currNode = head;
    while(currNode){
        process.stdout.write(currNode.val + " ");
        currNode = currNode.next;
    }
    console.log();
}

//traverse in reverse order
printListReverse = function(tail){
    let currNode = tail;
    while(currNode){
        process.stdout.write(currNode.val + " ");
        currNode = currNode.prev;

    }
    console.log();
}

getHead = () =>{
    return this.head;
}

getTail = () => {
    return this.tail;
}

}