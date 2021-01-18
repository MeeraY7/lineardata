// from https://www.geeksforgeeks.org/implementation-stack-javascript/
//STEP ONE: complete the pop() method's if statement to check if empty
// STEP TWO : complete the pop() method's return statement by removing the top most element
// STEP THREE: complete the peek method that lets you look at the top element in an array


// Stack class 
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    // push function 
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    } 
    // pop function 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 

        //STEP ONE: Use an if statement to check that the items array is equal to 0 items, if so, return "underflow"
       
        //STEP TWO: remove the top most element in the array:
        return    ; 
    } 
    // peek function 
    peek() 
    { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        // STEP THREE: return the top most item in the items array!
        return  ; 
    } 
    // isEmpty function 
    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    } 
    // printStack function 
    printStack() 
    { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
} 

// end class

// creating object for stack class 
var stack = new Stack(); 
  
// testing isEmpty and pop on an empty stack 
  
// returns false 
console.log(stack.isEmpty());  
  
// returns Underflow 
console.log(stack.pop());  
// Adding element to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30); 
  
// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printStack()); 
  
// returns 30 
console.log(stack.peek()); 
  
// returns 30 and remove it from stack 
console.log(stack.pop()); 
  
// returns [10, 20] 
console.log(stack.printStack());  