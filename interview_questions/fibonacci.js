// First iteration: Iterating

function fibonacci(n) {
  // Start an array with values 0 and 1
  var fibo = [0,1];

  if (n <= 2) {
    // if the number is less or equal to 2, return 1
    return 1;
  }

  // starting at index 2, keep assigning the sum of the previous two values in the fibo array to the current index's value
  for (var i = 2; i <= n; i++) {

    fibo[i] = fibo[i-1] + fibo[i-2];

  }

  // return the last value in the array
  return fibo[n];

}

var timeInMs = Date.now();
console.log(fibonacci(25)); // 75,025
console.log("Iterating took " + (Date.now() - timeInMs) + "ms");

// Run time complexity is O(n).



// -----------------------------------
// Using recursion



function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log(fibonacci(25)); // 75,025

// Run time complexity is O(2^n). Extremely slow.