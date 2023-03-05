

// Add Front
// Write a method that accepts a value and create a new node, assign it 
// to the list head, and return a pointer to the new head node.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
    class SLL {
         // constructor, other methods, removed for brevity
        constructor(){
        this.head=null;
     }
     
     addFront(value) {
        let newNode = new Node(value);
    
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
//     Remove Front
// Write a method to remove the head node and return the new 
// list head node. If the list is empty, return null.
    removeFront(value){
        // let ne = new Node(value);

        if (this.head == null){
        return value;
        }
    
    newNode=this.head;
    this.head=newNode.next;
    newNode.next=null;
    return this;
    }
//     Front
// Write a method to return the value (not the node) at the head of 
// the list. If the list is empty, return null.
front()  {
    if (this.head == null){
        return value;
        }else{
            return this.head.value;
        }
}

}
newNode=new SLL();
console.log(newNode.addFront(18));
console.log(newNode.addFront(5));
console.log(newNode.addFront(73));
// console.log(newNode.removeFront());
console.log(newNode.front());




