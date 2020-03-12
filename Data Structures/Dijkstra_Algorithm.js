console.log('Implementation of Dijkstra\'s Algorithm and weighted graph');

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

let myGraph = new WeightedGraph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B",10);
myGraph.addEdge("B", "D",20);
myGraph.addEdge("D", "E",15);
myGraph.addEdge("D", "F",5);
myGraph.addEdge("F", "E",20);
myGraph.addEdge("E", "C",30);
myGraph.addEdge("C", "A",6);
myGraph.removeVertex("A");
console.log(myGraph);


