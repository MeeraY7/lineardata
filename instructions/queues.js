//from https://www.geeksforgeeks.org/implementation-queue-javascript/
// Queue class 
// STEP ONE: complete the enqueue method
// STEP TWO: complete the dequeue method
//STEP THREE: complete the printQueue method
//FINAL STEP: run these functions below to check their outputs

class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    // enqueue function 
    enqueue(element) 
    {     
        // adding element to the queue 

        // STEP ONE: what method can you place here to add an element to the end of the array?
        
    } 
    // dequeue function 
    dequeue() 
    { 
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) {
            return "Underflow"; 
        }
        //STEP TWO: Return the items array with the correct item removed
        return ;
    } 
    // front function 
    front() 
    { 
        // returns the Front element of  
        // the queue without removing it. 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 
    // isEmpty function 
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    } 
    // printQueue function 
    printQueue() 
    { 
        var str = ""; 

        // STEP THREE: create a for loop that iterates through the items array,
        //and adds each existing item to the str variable
       
        return str; 
    } 
} 
// end class

// creating object for queue class 
var queue = new Queue(); 
              
// FINAL STEP: 
// console log the dequeue method to check that it returns 'underflow'
  
// use .isEmpty to check that the queue is empty at this point
  
// Adding elements to the queue so that it contains [10, 20, 30, 40, 50] using enqueue

//console.log the printQueue method to check that it successfully added your values to the array
  
//remove the top most element using dequeue and console.log its result
  
// console.log using the front method what the new top most element is 
  
// console.log the printQueue method to check that is outputs the correct thing

// outputs should be:
// Underflow
// true
// 10 20 30 40 50
// 10
// 20
// 20 30 40 50
