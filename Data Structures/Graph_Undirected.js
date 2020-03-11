console.log('Building an undirected graph !');

class Graph{
    constructor(){
        this.adjancencyList = {};
    }
    addVertex(myVertex){
        this.adjancencyList[myVertex] = [];
    }
    addEdge(vertex1,vertex2){
        if(this.adjancencyList[vertex1] && this.adjancencyList[vertex2]){
            this.adjancencyList[vertex1].push(vertex2);
            this.adjancencyList[vertex2].push(vertex1);
        }
        else{
            console.log('Please enter a valid vertex');
        }
    }
}


let myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A","B");
console.log(myGraph);
