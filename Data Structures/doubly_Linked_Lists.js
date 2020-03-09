console.log('This is doubly linked lists !');

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev =  null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        ++this.length;
    }
    pop(){
        if(this.length == 0){
            console.log('Empty');
        }
        else if(this.length == 1){
            this.head = null;
            this.tail = null;
            --this.length;
        }
        else{
            let newLast = this.tail.prev;
            newLast.next = null;
            this.tail = newLast;
            --this.length;
        }
    }
    shift(){
        if(this.length == 0){
            console.log('Empty');
        }
        else if(this.length == 1){
            this.head = null;
            this.tail = null;
            --this.length;
        }
        else{
            let newStart = this.head.next;
            newStart.prev = null;
            this.head = newStart;
            --this.length;
        }
    }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.pop();
list.shift();
console.log(list);