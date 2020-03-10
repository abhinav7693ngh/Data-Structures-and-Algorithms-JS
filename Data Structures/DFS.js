console.log('Tree Traversal DFS');

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
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
    
    static PostOrder(current, visited) {
        if (current == null) {
            return;
        }
        Tree.PostOrder(current.left, visited);
        Tree.PostOrder(current.right, visited);
        visited.push(current.value);
    }
    static PreOrder(current,visited){
        if(current == null){
            return;
        }
        visited.push(current.value);
        Tree.PreOrder(current.left,visited);
        Tree.PreOrder(current.right,visited);
    }
    dfs(){
        let visited = [];
        Tree.PreOrder(this.root,visited);
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
let preorder = tree.dfs();
console.log(tree);
console.log(preorder);