class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //We are using shift and unshift for push and pop as their Big O is constant compared to push and pop
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
            this.size--;
            return null;
        }else{
            var temp = this.first;            
            this.first = temp.next;
            this.size--;
            return temp;
        }
    }
}