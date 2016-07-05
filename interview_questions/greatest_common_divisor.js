// How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {

  var divisor = 2;
  var greatestDivisor = 1;

  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}


console.log(greatestCommonDivisor(6, 18)); // 6
console.log(greatestCommonDivisor(36, 42)); // 6



// -----------------------------------
// Can we make this better?




function greatestCommonDivisorTwo (a, b) {
  if (b == 0) {
    return a;
  }
  else {
    return greatestCommonDivisor(b, a%b);
  }
}


console.log(greatestCommonDivisorTwo(6, 18)); // 6
console.log(greatestCommonDivisorTwo(36, 42)); // 6