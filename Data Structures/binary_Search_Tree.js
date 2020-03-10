console.log('Binary Search Trees');
class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(this.root == null){
            this.root = newNode;
        }
        else{
            let trav = this.root;
            while(true){
                if(newNode.value <= trav.value){
                    if(trav.left != null){
                        trav = trav.left;
                    }
                    else{
                        trav.left = newNode;
                        break;
                    }
                }
                else{
                    if(newNode.value > trav.value){
                        if(trav.right != null){
                            trav = trav.right;
                        }
                        else{
                            trav.right = newNode;
                            break;
                        }
                    }
                }
            }
        }
    }
    find(my){
        if(this.root == null){
            console.log('Tree Empty');
        }
        else{
            let trav = this.root;
            while(true){
                console.log(trav);
                if(my == trav.value){
                    console.log(trav);
                    break;
                }
                else if(my <= trav.value && trav.left!=null){
                    trav = trav.left;
                }
                else if(my > trav.value && trav.right!=null){
                    trav = trav.right;
                }
                else{
                    console.log('Not Found');
                    break;
                }
            }
        }
    }
}

let tree =  new BinarySearchTree();
tree.insert(50);
tree.insert(40);
tree.insert(70);
tree.insert(20);
tree.insert(45);
tree.insert(60);
tree.insert(80);
tree.find(100);
console.log(tree);




















// ===== Random code play making Binary Search tree ===== //


/*
const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.root.right.right = new Node(17);
tree.root.right.left = new Node(13);
tree.root.left.right = new Node(8);
tree.root.left.left = new Node(3);
console.log(tree);
*/

// ===== End ===== //