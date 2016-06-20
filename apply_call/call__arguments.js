// How to get all the arguments as an array passed to a function:

// We do not define the function with any parameters, yet we can get all the arguments passed to it​
function doSomething () {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}
​
doSomething("Water", "Salt", "Glue"); 
// ["Water", "Salt", "Glue"]​

