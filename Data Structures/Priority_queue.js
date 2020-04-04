console.log('This is implementation of priority queues using Min Binary Heap');

class Node{
    constructor(val,prior){
        this.value = val;
        this.priority = prior;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val,pr){
        const newNode = new Node(val,pr);
        this.values.push(newNode);
        let newNodeIndex = (this.values.length) - 1;
        let parentIndex = Math.floor(((newNodeIndex)-1)/2);
        while(parentIndex>=0 && this.values[newNodeIndex].priority<this.values[parentIndex].priority){
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[newNodeIndex];
            this.values[newNodeIndex] = temp;
            newNodeIndex = parentIndex;
            parentIndex = Math.floor((newNodeIndex-1)/2);
        }
    }
    dequeue(){
        if(this.values.length == 0){
            console.log('Queue empty');
        }
        else if(this.values.length == 1){
            let myValue = this.values.pop();
            return myValue;
        }
        else if(this.values.length == 2){
            let myValue;
            if(this.values[0].priority < this.values[1].priority){
                myValue = this.values.shift();
            }
            else{
                myValue = this.values.pop();
            }
            return myValue;
        }
        else if(this.values.length == 3){
            let myValue = this.values.shift();
            if(this.values[0].priority > this.values[1].priority){
                let temp = this.values[0];
                this.values[0] = this.values[1];
                this.values[1] = temp;
            }
            return myValue;
        }
        else{
            let temp = this.values[this.values.length -1];
            this.values[this.values.length - 1] = this.values[0];
            this.values[0] = temp;
            let myValue = this.values.pop();
            let myIndex = 0;
            let left = 2*myIndex + 1;
            let right = 2*myIndex + 2;
            let arrayLength = this.values.length - 1;
            if(this.values[left]==undefined){
                left = false;
            }
            if(this.values[right]==undefined){
                right = false;
            }
            while(left || right){
                if(left && right){
                    if(this.values[myIndex].priority>this.values[left].priority && this.values[myIndex].priority>this.values[right].priority){
                        if(this.values[left].priority<this.values[right].priority){
                            let temp2 = this.values[left];
                            this.values[left] = this.values[myIndex];
                            this.values[myIndex] = temp2;
                            myIndex = left;
                            left = 2 * myIndex + 1;
                            right = 2 * myIndex + 2;
                            if (this.values[left] == undefined) {
                                left = false;
                            }
                            if (this.values[right] == undefined) {
                                right = false;
                            }
                        }
                        else{
                            let temp2 = this.values[right];
                            this.values[right] = this.values[myIndex];
                            this.values[myIndex] = temp2;
                            myIndex = right;
                            left = 2 * myIndex + 1;
                            right = 2 * myIndex + 2;
                            if (this.values[left] == undefined) {
                                left = false;
                            }
                            if (this.values[right] == undefined) {
                                right = false;
                            }
                        }
                    }
                    else{
                        break;
                    }
                }
                else if(left || right){
                    if(left){
                        if(this.values[myIndex].priority>this.values[left].priority){
                            let temp2 = this.values[left];
                            this.values[left] = this.values[myIndex];
                            this.values[myIndex] = temp2;
                            myIndex = left;
                            left = 2 * myIndex + 1;
                            right = 2 * myIndex + 2;
                            if (this.values[left] == undefined) {
                                left = false;
                            }
                            if (this.values[right] == undefined) {
                                right = false;
                            }
                        }
                        else{
                            break;
                        }
                    }
                    else if(right){
                        if(this.values[myIndex].priority>this.values[right].priority){
                            let temp2 = this.values[right];
                            this.values[right] = this.values[myIndex];
                            this.values[myIndex] = temp2;
                            myIndex = right;
                            left = 2 * myIndex + 1;
                            right = 2 * myIndex + 2;
                            if (this.values[left] == undefined) {
                                left = false;
                            }
                            if (this.values[right] == undefined) {
                                right = false;
                            }
                        }
                        else{
                            break;
                        }
                    }
                }
            }
        }
    }
}

let minHeapPQ = new PriorityQueue();
minHeapPQ.enqueue(41,7);
minHeapPQ.enqueue(39,5);
minHeapPQ.enqueue(33,3);
minHeapPQ.enqueue(18,1);
minHeapPQ.enqueue(27,6);
minHeapPQ.enqueue(12,2);
minHeapPQ.enqueue(55,4);
minHeapPQ.dequeue();
minHeapPQ.dequeue();
minHeapPQ.dequeue();
minHeapPQ.dequeue();
minHeapPQ.dequeue();
minHeapPQ.dequeue();

