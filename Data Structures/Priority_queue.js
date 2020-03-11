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
    insert(val,pr){
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
        console.log(this.values);
    }
}

let minHeapPQ = new PriorityQueue();
minHeapPQ.insert(41,7);
minHeapPQ.insert(39,5);
minHeapPQ.insert(33,3);
minHeapPQ.insert(18,1);
minHeapPQ.insert(27,6);
minHeapPQ.insert(12,2);
minHeapPQ.insert(55,4);
