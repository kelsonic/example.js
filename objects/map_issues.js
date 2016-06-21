// We use ES2015 for this example.
// Two different objects
let user1 = { name: "Sam" };
let user2 = { name: "Tyler" };

let totalReplies = {};
totalReplies[user1] = 5;
totalReplies[user2] = 42;

console.log( totalReplies[user1] );
// 42

console.log( totalReplies[user2] );
// 42

// Why?
// Both objects are converted to the string "[object Object]"

console.log( Object.keys(totalReplies) );
// ["[object Object]"]


// ------------------------------------------------
// How to store key/values with map

let user1 = { name: "Sam" };
let user2 = { name: "Tyler" };

// Create new map object
let totalReplies = new Map();

// We use the get() and set() methods to access values in Maps
// Values assigned to different object keys, as expected
totalReplies.set( user1, 5 );
totalReplies.set( user2, 42 );

console.log( totalReplies.get(user1) );
// 5

console.log( totalReplies.get(user2) );
// 42