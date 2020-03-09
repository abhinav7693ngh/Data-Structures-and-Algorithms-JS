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
    unShift(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            newNode.prev = null;
            this.head = newNode;
        }
        ++this.length;
    }
    get(index){
        let trav = this.head;
        index = parseInt(index);
        let i=0;
        if(index<0 || (index+1)>this.length){
            console.log('Cannot get because not found !');
        }
        else{
            while(i<index){
                trav = trav.next;
                i++;
            }
            console.log(trav.val);
        }
    }
    set(index,value){
        index = parseInt(index);
        if(index<0 || (index+1)>this.length){
            console.log('Cannot set because not found !');
        }
        else{
            let indexFromEnd = (this.length-1) - index;
            if(index<=indexFromEnd){
                let i=0;
                let trav = this.head;
                while(i<index){
                    trav = trav.next;
                    i++;
                }
                trav.val = value;
            }
            else{
                let i=0;
                let trav = this.tail;
                while(i<indexFromEnd){
                    trav = trav.prev;
                    i++;
                }
                trav.val = value;
            }
        }
    }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.set(4,60);
console.log(list);