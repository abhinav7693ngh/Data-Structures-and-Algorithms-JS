console.log('Breadth first search Iterative solution !');

class Graph {
    constructor() {
        this.adjancencyList = {};
    }
    addVertex(myVertex) {
        if (!this.adjancencyList[myVertex]) {
            this.adjancencyList[myVertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
            this.adjancencyList[vertex1].push(vertex2);
            this.adjancencyList[vertex2].push(vertex1);
        }
        else {
            console.log('Please enter a valid vertex');
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
            const index21 = this.adjancencyList[vertex1].findIndex(element => element == vertex2);
            if (index21 != -1) {
                this.adjancencyList[vertex1].splice(index21, 1);
            }
            const index12 = this.adjancencyList[vertex2].findIndex(element => element == vertex1);
            if (index12 != -1) {
                this.adjancencyList[vertex2].splice(index12, 1);
            }
        }
        else {
            console.log('Please enter a valid vertex');
        }
    }
    removeVertex(vertex) {
        if (this.adjancencyList[vertex]) {
            for (let x in this.adjancencyList) {
                this.removeEdge(x, vertex);
            }
            delete this.adjancencyList[vertex];
        }
        else {
            console.log('Please enter a valid vertex');
        }
    }
    static visited = {};
    static myQueue = [];
    static BFSHelper(myAns) {
        while (Graph.myQueue.length > 0) {
            let myVertex = Graph.myQueue.pop();
            if (!Graph.visited[myVertex]) {
                myAns.push(myVertex);
                Graph.visited[myVertex] = true;
                for (let i of myGraph.adjancencyList[myVertex]) {
                    Graph.myQueue.unshift(i);
                }
            }
        }
    }
    BFS(vertex) {
        let myAns = [];
        Graph.myQueue.unshift(vertex);
        Graph.BFSHelper(myAns);
        return myAns;
    }
}



let myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "D");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("F", "E");
myGraph.addEdge("E", "C");
myGraph.addEdge("C", "A");
const myans = myGraph.BFS("A");
console.log(myans);
console.log(myGraph);