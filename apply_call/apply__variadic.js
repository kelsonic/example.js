
// What are 'variable-arity', aka 'variadic', functions?
// We can pass any number of arguments to the Math.max () method​
console.log(Math.max (23, 11, 34, 56)); // 56


var allNumbers = [23, 11, 34, 56];
// We cannot pass an array of numbers to the the Math.max method like this​
console.log(Math.max(allNumbers)); // NaN

// Using the apply () method, we can pass the array of numbers:​
console.log(Math.max.apply(null, allNumbers)); 
// 56
// we pass null since Math.max doesn't use 'this'


