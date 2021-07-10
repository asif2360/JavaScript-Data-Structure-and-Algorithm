export class ListNode {

    constructor(val, prev, next){
        this.prev = prev != undefined ? prev : null;
        this.val = val != undefined ? val : 0;
        this.next = next != undefined ? next : null;
    }
}