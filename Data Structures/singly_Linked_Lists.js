// Declaration of node //

class Node{
    constructor(data){
        this.val = data;
        this.next = null;
    }
}

// Singly Linked List declaration //

// I have written itself full methods below without assuming we have other helper methods //
// We can also use helper methods //

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
        }
        else if(this.length > 0){
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
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
    insert(index,value){
        const newNode = new Node(value);
        index =  parseInt(index);
        let i=0;
        let prev = this.head;
        let myNext = this.head.next;
        if(index<0 || (index)>this.length){
            console.log('Cannot insert');
        }
        else if(index == 0){
            newNode.next = this.head;
            this.head = newNode;
            ++this.length;
        }
        else{
            while(i<index-1){
                prev = myNext;
                myNext = myNext.next;
                i++;
            }
            newNode.next = myNext;
            prev.next = newNode;
            ++this.length;
            if(myNext == null){
                this.tail = newNode;
            }
        }
    }
    remove(index){
        index = parseInt(index);
        if(index<0 || index>=this.length || this.length==0){
            console.log('Cannot delete');
        }
        else if(this.length==1){
            this.head = null;
            this.tail = null;
            --this.length;
        }
        else if(index == (this.length-1)){
            let prev = this.head;
            let myNext = this.head.next;
            while(myNext.next != null){
                prev = myNext;
                myNext = myNext.next;
            }
            this.tail = prev;
            prev.next = null;
            --this.length;
        }
        else if(index == 0){
            let myNext = this.head.next;
            this.head =  myNext;
            --this.length;
        }
        else{
            let prev = this.head;
            let current = this.head.next;
            let myNext = this.head.next.next;
            let i=0;
            while(i<index-1){
                prev = current;
                current = myNext;
                myNext = myNext.next;
                i++;
            }
            prev.next = myNext;
            current.next = null;
            --this.length;
        }
    }
    reverse(){
        let prev = this.head;
        let current = this.head.next;
        let myNext = this.head.next.next;
        while(current.next != null){
            current.next = prev;
            prev = current;
            current = myNext;
            myNext = myNext.next;
        }
        current.next = prev;
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;
        this.tail.next = null;
    }
}


const myLinked = new SinglyLinkedList();
myLinked.push(10);
myLinked.push(20);
myLinked.push(30);
myLinked.push(40);
myLinked.reverse();
console.log(myLinked);


/*
// Some Random code play !!

const first = new Node('Hi');
first.next = new Node('How');
first.next.next = new Node('are');
first.next.next.next = new Node('you !!');

console.log(first);
*/