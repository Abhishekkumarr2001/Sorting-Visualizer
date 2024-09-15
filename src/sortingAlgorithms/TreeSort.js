export function getTreeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    const bst = new BinarySearchTree();
    for (let i = 0; i < array.length; i++) {
        bst.insert(array[i], animations, i);
    }

    const sortedArray = [];
    bst.inOrderTraversal(sortedArray, animations);
    return animations;
}

class TreeNode {
    constructor(value, index) {
        this.value = value;
        this.index = index;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, animations, index) {
        const newNode = new TreeNode(value, index);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode, animations);
        }
    }

    insertNode(node, newNode, animations) {
        animations.push([node.index, newNode.index]);
        animations.push([node.index, newNode.index]);
        if (newNode.value < node.value) {
            animations.push([node.index, newNode.value]);
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode, animations);
            }
        } else {
            animations.push([node.index, newNode.value]);
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode, animations);
            }
        }
    }

    inOrderTraversal(sortedArray, animations) {
        this.inOrder(this.root, sortedArray, animations);
    }

    inOrder(node, sortedArray, animations) {
        if (node !== null) {
            this.inOrder(node.left, sortedArray, animations);
            sortedArray.push(node.value);
            animations.push([node.index, node.value]);
            this.inOrder(node.right, sortedArray, animations);
        }
    }
}
