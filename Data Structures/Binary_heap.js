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
    }
    extractMax(){
        console.log(this.values);
        if(this.values.length == 0){
            console.log('Empty');
        }
        else if(this.values.length == 1){
            return this.values.pop();
        }
        else if(this.values.length ==  2){
            return this.values.shift();
        }
        else if(this.values.length == 3){
            let max = this.values.shift();
            if(this.values[0]<this.values[1]){
                let temp = this.values[1];
                this.values[1] = this.values[0];
                this.values[0] = temp;
            }
            console.log(this.values);
            return max;
        }
        else{
            let temp = this.values[0];
            this.values[0] = this.values[this.values.length-1];
            this.values[this.values.length - 1] = temp;
            const max = this.values.pop();
            let index = 0;
            let left = this.values[2*index + 1];
            let right = this.values[2*index + 2];
            while(this.values[index]<left || this.values[index]<right){
                if(right<left){
                    let temp2 = this.values[index];
                    this.values[index] = this.values[2*index + 1];
                    this.values[2*index + 1] = temp2;
                    index = 2*index + 1;
                    left = this.values[2*index + 1];
                    right = this.values[2*index + 2];
                }
                else{
                    let temp2 = this.values[index];
                    this.values[index] = this.values[2*index + 2];
                    this.values[2*index + 2] = temp2; 
                    index = 2*index + 2;
                    left = this.values[2*index + 1];
                    right = this.values[2*index + 2];
                }
            }
            console.log(this.values);
            return max;
        }
        
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
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
