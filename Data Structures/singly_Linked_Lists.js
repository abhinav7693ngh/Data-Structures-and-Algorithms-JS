// Declaration of node //

class Node{
    constructor(data){
        this.val = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        ++this.length;
    }
    pop(){
        if(this.length == 0){
            console.log('Empty, hence can\'t pop!!');
        }
        else if(this.length==1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        else if(this.length > 1){
            let prev = this.head;
            let myNext = this.head.next;
            while(myNext.next!=null){
                prev = myNext;
                myNext = myNext.next;
            }
            this.tail = prev;
            prev.next = null;
            --this.length;
        }
    }
}


const myLinked = new SinglyLinkedList();
myLinked.push(20);
myLinked.push(30);
console.log(myLinked);
myLinked.pop();
console.log(myLinked);
myLinked.pop();
console.log(myLinked);
myLinked.pop();


/*
// Some Random code play !!

const first = new Node('Hi');
first.next = new Node('How');
first.next.next = new Node('are');
first.next.next.next = new Node('you !!');

console.log(first);
*/