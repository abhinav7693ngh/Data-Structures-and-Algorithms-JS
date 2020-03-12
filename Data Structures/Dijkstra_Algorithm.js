console.log('Implementation of Dijkstra\'s Algorithm');

class WeightedGraph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    
}

let myGraph = new WeightedGraph();
myGraph.addVertex("A");
myGraph.addVertex("B");
console.log(myGraph);


