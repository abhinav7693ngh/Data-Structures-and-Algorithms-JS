console.log('Implementation of Dijkstra\'s Algorithm and weighted graph');


class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,prior){
        this.values.push({value : val,priority : prior});
        this.sort();
    }
    dequeue(){
        if(this.values.length != 0 ){
            return this.values.shift();
        }
        else{
            return null;
        }
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}


class WeightedGraph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }   
    addEdge(vertex1,vertex2,weight){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push({node : vertex2, weight : weight});
            this.adjacencyList[vertex2].push({node : vertex1, weight : weight});
        }
        else{
            console.log('Please enter a valid node');
        }
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            let index12 = this.adjacencyList[vertex1].findIndex(ele => ele.node == vertex2);
            if(index12!=-1){
                this.adjacencyList[vertex1].splice(index12,1);
            }
            let index21 = this.adjacencyList[vertex2].findIndex(ele => ele.node == vertex1);
            if(index21!=-1){
                this.adjacencyList[vertex2].splice(index21,1);
            }
        }
        else{
            console.log('Please enter a valid edge');
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for (let i in this.adjacencyList) {
                let myarr = this.adjacencyList[i];
                let index = myarr.findIndex(ele => ele.node == vertex);
                if (index != -1) {
                    myarr.splice(index, 1);
                }
            }
            delete this.adjacencyList[vertex];
        }
        else{
            console.log('Please enter a valic node');
        }
    }
}

let myQueue = new PriorityQueue();
myQueue.enqueue("A",0);
myQueue.enqueue("B",4);
myQueue.enqueue("C",2);
myQueue.enqueue("D",1);
console.log(myQueue.dequeue());


let myGraph = new WeightedGraph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B",4);
myGraph.addEdge("B", "E", 3);
myGraph.addEdge("E", "F", 1);
myGraph.addEdge("E", "D", 3);
myGraph.addEdge("F", "D", 1);
myGraph.addEdge("F", "C", 4);
myGraph.addEdge("D", "C", 2);
myGraph.addEdge("C", "A", 2);
console.log(myGraph);


