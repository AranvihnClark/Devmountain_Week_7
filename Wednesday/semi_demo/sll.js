class Node {
    constructor(value, age) {
        this.value = value;
        this.age = age;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
    }

    size() {
        let count = null;
        let node = this.head;

        //         node   -> node -> node   -> node   
        // head -> vinson -> ben -> latisha -> dionte -> tail // Or 4 total
        while (node != null) {
            count++;
            node = node.next;
        }

        return count;
    }
    
    isEmpty() {
        if (this.head === null) {
            return true;
        } else {
            return false;
        }
    }
    
    getLast() {
        return this.tail;
    }

    addToFront(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    addToEnd(node) {
        this.tail.next = node;
        this.tail = node;
    }

    insertAt(node, index) {
        let count = 1;
        let current = this.head;
        while (count != index) {
            current = current.next;
            count++;
        }
        
        if(index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            node.next = current.next;
            current.next = node;
        }
    }
}

// Makes a new empty LinkedList, where the 'head' is null.
let list = new LinkedList();
/*
let myList = new LinkedList();

// This creates a new Node with the value of 'vinson'
let vinson = new Node('vinson', 32);

// Assigns the head value in the LinkedList 'list' as variable vinson or 'vinson'
// We also need to assign the tail as 'vinson' as well as he is the start and last value of our list.
list.head = vinson;
list.tail = vinson;

// So let's create a second node that will connect to our currently 1-tailed list.
let ben = new Node('ben', 31);

// In my opinion, the list.tail should be defined first but this was what the demo illustrated.
// But I guess, as nothing is ever done with the list, it wouldn't matter what order we do this in.
vinson.next = ben;
list.tail = ben;

let latisha = new Node('latisha', 37);

vinson.next.next = latisha;
list.tail = latisha;

let dionte = new Node('dionte', 35);
vinson.next.next.next = dionte;
list.tail = dionte;



console.log(list);
console.log(list.size());
console.log(list.isEmpty());
console.log(list.getLast().value);

list.addToFront(new Node('rola', 33));
console.log(list);
console.log(list.size());

list.addToEnd(new Node('joanna', 31));
console.log(list);
console.log(list.size());
*/

console.log(list.isEmpty());

list.addToFront(new Node('rola', 44));
list.addToEnd(new Node('vinson', 42));
list.addToEnd(new Node('ben', 31));
list.addToEnd(new Node('latisha', 39));
list.addToEnd(new Node('dionte', 40));
list.addToEnd(new Node('joanna', 41));
/*
console.log(list.size());
console.log(list.getLast());
console.log(list.isEmpty());
*/
list.insertAt(new Node('aranvihn', 31), 2);
console.log(list.head);
console.log(list.head.next.next);