class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }


    shift() {
        if (this.length === 0) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current, couter;
        //If index is less than or equal to mid value we choose iterating from head else tail
        if (index <= this.length / 2) {
            current = this.head;
            counter = 0;
            while (counter !== index) {
                counter++;
                current = current.next;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                counter--;
                current = current.prev;
            }
        }
        return current;
    }

    set(value, index) {
        let updatedNode = this.get(index);
        if (updatedNode === null) return false;
        updatedNode.val = value;
        return true;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        this.tail = current;

        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = current.next;
        }
        this.head = prev;
        this.tail.next = this.tail.prev;
        this.tail.prev = null;
        return this;
    }

}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.reverse());