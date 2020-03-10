console.log('Tree Traversal BFS');

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            let trav = this.root;
            while (true) {
                if (newNode.value <= trav.value) {
                    if (trav.left != null) {
                        trav = trav.left;
                    }
                    else {
                        trav.left = newNode;
                        break;
                    }
                }
                else {
                    if (newNode.value > trav.value) {
                        if (trav.right != null) {
                            trav = trav.right;
                        }
                        else {
                            trav.right = newNode;
                            break;
                        }
                    }
                }
            }
        }
    }
    bfs(){
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while(queue.length > 0){
            let toBeChecked = queue.shift();
            console.log(toBeChecked);
            visited.push(toBeChecked.value);
            if(toBeChecked.left != null){
                queue.push(toBeChecked.left);
            }
            if(toBeChecked.right != null){
                queue.push(toBeChecked.right);
            }
        }
        return visited;
    }
}

const tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
const mybfs = tree.bfs();
console.log(mybfs);