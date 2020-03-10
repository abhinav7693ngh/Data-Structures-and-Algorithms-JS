// ===== Array Implementation ===== //

let myarray = new Array();

myarray.push(10);
myarray.push(20);
myarray.push(30);
myarray.push(40);

myarray.pop();
myarray.pop();
myarray.pop();

console.log(myarray);

// or we can also use shift() and unshift() methods to make our array like a stack

// ===== Linked list implementation ===== //


class Node{
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0;
    }
    push(value){
        let newNode =  new Node(value);
        if(this.start == null){
            this.start = newNode;
            this.end = newNode;
        }
        else{
            newNode.next = this.start;
            this.start = newNode;
        }
        ++this.length;
    }
    pop(){
        if(this.length == 0){
            console.log('Stack is empty !');
        }
        else if(this.length == 1){
            this.start = null;
            this.end = null;
            --this.length;
        }
        else{
            let newStart = this.start.next;
            this.start = newStart;
            --this.length;
        }
    }
    top(){
        if(this.length == 0){
            console.log('Stack is empty !');
        }
        else{
            let topNode = this.start.val;
            console.log(topNode);
        }
    }
    
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.pop();
myStack.top();
console.log(myStack);
