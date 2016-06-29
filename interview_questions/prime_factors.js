// First iteration

function primeFactors(n) {
  
  var factors = [];
  var divisor = 2;

  // Until the number is 2 or less
  while (n > 2) {
    if (n % divisor == 0) {
      // if n can be divided evenly by divisor
      // add the divisor to the factors array to be returned
      factors.push(divisor);

      // Divide n by the divisor that you just pushed into your array
      n = n / divisor;
    }
    else {
      // increment divisor
      divisor++;
    }
  }
  // if factors is empty, say no prime factors found, else return factors array
  return factors.length !== 0 ? factors : "No prime factors found for " + n + "."
}

console.log(primeFactors(69)); // [3, 23]
console.log(primeFactors(2)); // "No prime factors found for 2."


// Run time complexity is O(n).