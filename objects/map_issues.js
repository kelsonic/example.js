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