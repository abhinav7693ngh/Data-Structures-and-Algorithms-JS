class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.start = null;
        this.end = null;
        this.length = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(this.start == null){
            this.start = newNode;
            this.end = newNode;
            ++this.length;
        }
        else{
            this.end.next = newNode;
            this.end = newNode;
            ++this.length;
        }
    }
    dequeue(){
        if(this.length == 0){
            console.log('Queue is empty !');
        }
        else{
            let newStart = this.start.next;
            this.start = newStart;
            --this.length;
        }
    }
    top(){
        if(this.length == 0){
            console.log('Queue is empty !');
        }
        else{
            let topValue = this.start.value;
            console.log(topValue);
        }
    }
}

const myQueue =  new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);