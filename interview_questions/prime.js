// Basic Iteration


function isPrime(n) {
  // We will check if divisor is divisible by n
  var divisor = 2;

  // Until the divisor is greater or equal to n
  while (n > divisor) {
    // if n is divisible by divisor return false
    if (n % divisor === 0) {
      return false
    } 
    // Otherwise increment divisor
    else {
      divisor++;
    }
  }

  // if n isn't divisible by any divisor values
  return true;
}

console.log(isPrime(13)); // true
console.log(isPrime(10)); // false


// --------------------------------
// How can we make this more efficient?


function isPrimeAgain(n) {
  var divisor = 3;
  // We don't need to check divisor values above or equal to this limit
  var limit = Math.sqrt(n);


  if (n === 2 || n === 3) {
    return true;
  } 
  
  if (n % 2 === 0) {
    return false;
  }

  while (divisor <= limit) {
    if (n % divisor) {
      return false;
    }
    else {
      // increment by 2 since n isn't divisible by any even number
      divisor += 2;
    }
  }

  return true;
}