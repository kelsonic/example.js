// An array-like object: note the non-negative integers used as keys​
var anArrayLikeObj = {
  0: "Martin",
  1: 78, 
  2: 67, 
  3: ["Letta", "Marieta", "Pauline"], 
  length: 4
};

// Make a quick copy and save the results in a real array:​
// First parameter sets the "this" value​
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
​
console.log(newArray); // ["Martin", 78, 67, Array[3]]​
​
// Search for "Martin" in the array-like object​
console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true​
​
// Try using an Array method without the call() or apply ()​
console.log(anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'​
​
// Reverse the object:​
console.log(Array.prototype.reverse.call(anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}​
​
// Sweet. We can pop too:​
console.log(Array.prototype.pop.call(anArrayLikeObj));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}​
​
// What about push?​
console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}​