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
            console.log('Empty');
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
    shift(){
        if(this.length == 0){
            console.log('Empty');
        }
        else if(this.length == 1){
            this.head = null;
            this.tail = null ;
            --this.length;
        }
        else if(this.length > 1){
            this.head = this.head.next;
            --this.length;
        }
    }
    unShift(val){
        const newNode =  new Node(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            ++this.length;
        }
        else if(this.length > 0){
            newNode.next = this.head;
            this.head = newNode;
            ++this.length;
        }
    }
    get(index){
        index = parseInt(index);
        let i=0;
        if(this.length < (index+1) || index<0){
            console.log('Does not exist !');
        }
        else{
            let myNode = this.head;
            while(i<index){
                myNode = myNode.next;
                i++;
            }
            console.log(myNode.val);
        }
    }
    set(index,value){
        index = parseInt(index);
        let i=0;
        if(this.length < (index+1) || index<0){
            console.log('Does not exist !');
        }
        else{
            let myNode = this.head;
            while(i<index){
                myNode = myNode.next;
                i++;
            }
            myNode.val = value;
        }
    }
}


const myLinked = new SinglyLinkedList();
myLinked.push(20);
myLinked.push(30);
myLinked.push(40);
myLinked.push(50);
myLinked.push(60);
myLinked.get(0);
myLinked.set(0,100);
console.log(myLinked);


/*
// Some Random code play !!

const first = new Node('Hi');
first.next = new Node('How');
first.next.next = new Node('are');
first.next.next.next = new Node('you !!');

console.log(first);
*/