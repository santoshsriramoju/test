class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (val > current.val) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }

    }

    find(val) {
        if (this.root === null) return false;
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }



    DFSPreorder() {
        let data = [];
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostorder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    DFSInorder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}

let b = new BinarySearchTree();
b.insert(10);
b.insert(8);
b.insert(20);
b.insert(7);
b.insert(9);
b.insert(18);
b.insert(40);
console.log(b)
console.log(b.DFSInorder());