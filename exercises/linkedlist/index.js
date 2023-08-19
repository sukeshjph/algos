// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// class Node {
//     constructor(data, node) {
//         this.data = data;
//         this.next = node || null;
//     }
// }

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // insertFirst(data) {

    //     if (this.head === null) {
    //         this.head = new Node(data);
    //     }
    //     else {
    //         newNode.next = this.head;
    //         this.head = new Node(data, this.head);
    //     }
    //     this.listSize++;
    // }

    insertFirst(data) {
        // this.head = new Node(data, this.head);
        return this.insertAt(data, 0);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        // return this.head;
        return this.getAt(0);
    }

    getLast() {
        // if (!this.head) {
        //     return null;
        // }

        // let node = this.head;

        // while (node.next !== null) {
        //     node = node.next;
        // }

        // return node;
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // this.head = this.head.next;
        this.removeAt(0);
    }

    // removeLast() {
    //     if (!this.head) {
    //         return null;
    //     }

    //     if (!this.head.next) {
    //         this.head = null;
    //     }

    //     let node = this.head;

    //     while (node.next.next) {
    //         node = node.next;
    //     }

    //     node.next = null;
    // }

    removeLast() {
        // if (!this.head) {
        //     return null;
        // }

        // let previousNode = this.head;
        // let currentNode = this.head.next;

        // if (!currentNode) {
        //     const node = this.head;
        //     this.head = null;
        //     return node;
        // }

        // while (currentNode.next) {
        //     previousNode = currentNode;
        //     currentNode = currentNode.next;
        // }

        // previousNode.next = null;

        return this.removeAt(this.size() - 1);
    }

    // insertLast(data) {
    //     let node = this.head;

    //     if (!this.head) {
    //         this.head = new Node(data);
    //         this.listSize++;
    //         return;
    //     }

    //     while (node.next) {
    //         node = node.next;
    //     }

    //     node.next = new Node(data);
    //     this.listSize++;
    // }


    insertLast(data) {
        // const newNode = new Node(data);
        // const lastNode = this.getLast();

        // if (!lastNode) {
        //     this.head = newNode;
        // }

        // else {
        //     lastNode.next = newNode;
        // }

        this.insertAt(data, this.size());
    }

    getAt(index) {
        let localIndex = 0;
        let node = this.head;

        while (node) {
            if (localIndex === index) {
                return node;
            }
            node = node.next;
            localIndex++;
        }

        return null;
    }

    removeAt(index) {

        // Empty list or Index out of bound
        if (!this.head || index > this.size()) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prevNode = this.getAt(index - 1);

        // ONly one element and index =1 
        if (!prevNode.next) {
            return;
        }

        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {


        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // if (index >= this.size()) {
        //     const lastNode = this.getLast();
        //     lastNode.next = new Node(data);
        //     return;
        // }

        const prevNode = this.getAt(index - 1) ?? this.getLast();
        const node = new Node(data, prevNode.next);

        prevNode.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while (node) {
            fn(node, counter);
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
