// from https://www.geeksforgeeks.org/implementation-stack-javascript/
//STEP ONE: complete the pop() method's if statement to check if empty
// STEP TWO : complete the pop() method's return statement by removing the top most element
// STEP THREE: complete the peek method that lets you look at the top element in an array
//FINAL STEP: run these functions below to check their outputs

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
  
// FINAL STEPS:

//check if the stack is empty returns false

  
// check that using .pop on an empty array returns underflow

// Adding element 10,20 and 30 to the stack using a method from the class
  
// print the entire stack in the terminal so we can check it was added 

// peeking at the stack should return 30
  
// remove the top element in the array, and make sure it returns what this element was

//print the new stack

// outputs should be:
// true
// Underflow
// 10 20 30
// 30
// 30
// 10 20