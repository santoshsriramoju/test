class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
            
            //Alternate Solution
            // let last = this.head;
            //Looping to get the last element, if there is no next then the current element is the last element 
            // while(last.next){
            //     last = last.next;                
            // }
            // last.next = newNode;
            // this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (this.head) {
            let curHead = this.head;
            this.head = curHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return curHead;
        }
        return undefined;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let curHead = this.head;
            newNode.next = curHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let curNode = this.head;
        if (!curNode) return null;
        while (curNode) {
            if (index === counter) {
                return curNode;
            }
            counter++;
            curNode = curNode.next;
        }
    }

    set(index, value) {
        let updateNode = this.get(index);
        if (updateNode) {
            updateNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        this.length--;
        return removedNode;
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
            current = next;
        }
        this.head = prev;
        return this;
    }

}

let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
console.log(list);





