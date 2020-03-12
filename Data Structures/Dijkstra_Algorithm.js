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
    addEdge(vertex1,vertex2,weight){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push({node : vertex2, weight : weight});
            this.adjacencyList[vertex2].push({node : vertex1, weight : weight});
        }
        else{
            console.log('Please enter a valid node');
        }
    }
}

let myGraph = new WeightedGraph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addEdge("A","B",10);
console.log(myGraph);


