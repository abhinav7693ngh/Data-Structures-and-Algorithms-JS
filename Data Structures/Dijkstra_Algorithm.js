console.log('Implementation of Dijkstra\'s Algorithm and weighted graph');


class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,prior){
        this.values.push({node : val,distance : prior});
        this.sort();
    }
    dequeue(){
        if(this.values.length != 0 ){
            let tobeReturned =  this.values.shift();
            this.sort();
            return tobeReturned;
        }
        else{
            return null;
        }
    }
    sort(){
        this.values.sort((a,b) => a.distance - b.distance);
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
            console.log('Please enter a valid node');
        }
    }
    dijkstra(start, end){
        if(this.adjacencyList[start] && this.adjacencyList[end]){
            let myans = [];
            let optimumDistance = 0;
            let visited = {};
            let previous = {};
            let myDistanceQueue = new PriorityQueue();
            for (let i in this.adjacencyList) {
                if (i == start) {
                    myDistanceQueue.enqueue(i,0);
                }
                else{
                    myDistanceQueue.enqueue(i,Infinity);
                }
            }
            for(let i in this.adjacencyList){
                previous[i] = null;
            }
            let visiting = myDistanceQueue.values[0];
            while(myDistanceQueue.values.length > 0){
                    for(let j of this.adjacencyList[visiting.node]){
                        if(!visited[j.node]){
                            let updatedDistance = visiting.distance + j.weight;
                            let myDistanceNode = myDistanceQueue.values.find(ele => ele.node == j.node);
                            if(updatedDistance < myDistanceNode.distance){
                                myDistanceNode.distance = updatedDistance;
                                previous[j.node] = visiting.node;
                            }
                            
                        }
                    }
                visited[visiting.node] = true;
                visiting = myDistanceQueue.dequeue();
                console.log(visiting);
            }
            myans.push(end);
            while (previous[end]) {
                myans.push(previous[end]);
                end = previous[end];
            }
            myans = myans.reverse();
            console.log(myans);
            for(let i in myans){
                if(parseInt(i)+1==myans.length){
                    break;
                }
                let myWeight = this.adjacencyList[myans[i]].find(ele => ele.node==myans[parseInt(i)+1]);
                optimumDistance = optimumDistance + myWeight.weight;
            }
            console.log(`Distance = ${optimumDistance}`);
        }
        else{
            console.log('Please enter valid vertex');
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
myGraph.addEdge("A", "B",4);
myGraph.addEdge("B", "E", 3);
myGraph.addEdge("E", "F", 1);
myGraph.addEdge("E", "D", 3);
myGraph.addEdge("F", "D", 1);
myGraph.addEdge("F", "C", 4);
myGraph.addEdge("D", "C", 2);
myGraph.addEdge("C", "A", 2);
myGraph.dijkstra("A","E");



