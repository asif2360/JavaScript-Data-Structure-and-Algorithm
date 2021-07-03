export class LinkedListPrint{

    printList(head){
        while(head){
            process.stdout.write(head.data + " ");
            head = head.next;
        }

        console.log();
    }
}