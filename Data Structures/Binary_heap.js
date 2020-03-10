console.log('This is Binary Heap!');

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(value){
        this.values.push(value);
        let valueIndex = this.values.length - 1;
        let parentIndex = Math.floor((valueIndex - 1) / 2);
        while(parentIndex>=0 && this.values[parentIndex]<this.values[valueIndex]){
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[valueIndex];
            this.values[valueIndex] = temp;
            valueIndex = parentIndex;
            parentIndex = Math.floor((valueIndex-1)/2);
        }
        console.log(this.values);
    }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
