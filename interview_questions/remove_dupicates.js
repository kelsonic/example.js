// How would you remove duplicate members from an array?

// Iterate through the array and create a object with the keys being
// the elements of the array thereby making all unique

function unique(array){
  var collectionObj = {};
  array.forEach(function(ele){
    collectionObj[ele] = true;
  });
  return Object.keys(collectionObj);
}
var timeInMs = Date.now();
console.log(unique([1,2,2,2,3,4,5,5,6,7,6,2,8,8,7]));
// result
// [ '1', '2', '3', '4', '5', '6', '7', '8' ]

console.log("Iterating took " + (Date.now() - timeInMs) + "ms");
// Iterating took 21ms

function unique2(array){
  var collectionObj = {};
  for (var i = 0; i < array.length; i++){
      collectionObj[array[i]] = true;
  };
  return Object.keys(collectionObj);
}
var timeInMs = Date.now();
console.log(unique2([1,2,2,2,3,4,5,5,6,7,6,2,8,8,7]));
// result
// [ '1', '2', '3', '4', '5', '6', '7', '8' ]

console.log("Iterating took " + (Date.now() - timeInMs) + "ms");
// Iterating took 0ms

// this function does a similar thing but uses a for loop which is
// more performant likely due to less function calls.

function removeDuplicate(arr){
  var exists ={},
      outArr = [],
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}
var timeInMs = Date.now();
console.log(removeDuplicate([1,2,2,2,3,4,5,5,6,7,6,2,8,8,7]));
// result
// [ 1,2,3,4,5,6,7,8]
console.log("Iterating took " + (Date.now() - timeInMs) + "ms");
// Iterating took 1ms

// time complexity O(n)
