// This example is explained in detail below (just after this code box).
function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"] = function ()  {
      return uniqueID + i;
    }
  }
  
  return theCelebrities;
}

var actionCelebs = [
  {name: "Stallone", id: 0}, 
  {name: "Cruise", id: 0}, 
  {name: "Willis", id: 0}
];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

console.log(createIdForActionCelebs[0].id()); // 103
console.log(createIdForActionCelebs[1].id()); // 103
console.log(createIdForActionCelebs[2].id()); // 103


// --------------------------------------------
// HOW TO FIX THIS?

// Uncomment Code Below and Comment Code Above:

// function celebrityIDCreator (theCelebrities) {
//   var i;
//   var uniqueID = 100;
//   for (i = 0; i < theCelebrities.length; i++) {
//     theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
//       return function () {
//           return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
//       }() // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
//     } (i); // immediately invoke the function passing the i variable as a parameter
//   }

//   return theCelebrities;
// }

// var actionCelebs = [
//   {name: "Stallone", id: 0}, 
//   {name: "Cruise", id: 0}, 
//   {name: "Willis", id: 0}
// ];

// var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

// console.log(createIdForActionCelebs[0].id); // 100
// console.log(createIdForActionCelebs[1].id); // 101
// console.log(createIdForActionCelebs[2].id); // 102


