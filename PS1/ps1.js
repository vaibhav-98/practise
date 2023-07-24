







function exampleFunction() {
    var x = 10; // x is functionally scoped and can only be accessed within the function.
    console.log(x);
  }
  
  exampleFunction(); // Output: 10
  console.log(x); // Error: x is not defined since it's outside the functional scope.
  





  function exampleFunction() {
    if (true) {
      let y = 20; // y is block-scoped and can only be accessed within this if block.
      console.log(y);
    }
    console.log(y); // Error: y is not defined since it's outside the block scope.
  }
  exampleFunction(); // Output: 20
  
















































