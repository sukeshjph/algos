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
        this.listSize = 0;
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
        this.head = new Node(data, this.head);
        this.listSize++;
    }

    size() {
        return this.listSize;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node.next !== null) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
        this.listSize = 0;
    }

    removeFirst() {
        const oldHead = this.head;
        this.head = this.head.next;
        this.listSize--;
        return oldHead;
    }

    // removeLast() {
    //     if (!this.head) {
    //         return null;
    //     }

    //     if (this.listSize === 1) {
    //         const node = this.head;
    //         this.head = null;
    //         return node;
    //     }

    //     let node = this.head;

    //     while (node.next.next) {
    //         node = node.next;
    //     }

    //     node.next = null;
    //     this.listSize--;
    //     return node.next;
    // }

    removeLast() {
        if (!this.head) {
            return null;
        }

        let previousNode = this.head;
        let currentNode = this.head.next;

        if (!currentNode) {
            const node = this.head;
            this.head = null;
            this.listSize = 0;
            return node;
        }

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
        this.listSize--;
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
        const newNode = new Node(data);
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = newNode;
        }

        else {
            lastNode.next = newNode;
        }


        this.listSize++;
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

        return node;
    }

    removeAt(index) {
        let localIndex = 0;

        // Empty list or Index out of bound
        if (!this.head || index > this.listSize) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let node = this.head;

        while (node) {

            if (localIndex === index) {
                const prevNode = this.getAt(localIndex - 1);
                prevNode.next = node.next;
                return;
            }

            node = node.next;
            localIndex++;
        }

    }
}

module.exports = { Node, LinkedList };
