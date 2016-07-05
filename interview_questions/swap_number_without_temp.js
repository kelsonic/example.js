// How would you swap two numbers without using a temporary variable?

function swapNum(a, b) {
  console.log('before swap: ', 'a =>', a, 'b =>', b);
  b -= a;
  a += b;
  b = a-b;
  console.log('after swap: ', 'a =>', a, 'b =>', b);
}

console.log(swapNum(2,3));
// before swap: a => 2, b => 3
// after swap: a => 3, b => 2



// --------------------------------------
// Can we make this better?



// using LOGICAL CONJUNCTION
function swapNum2(a, b) {
  console.log('before swap: ', 'a =>', a, 'b =>', b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log('after swap: ', 'a =>', a, 'b =>', b);
}

console.log(swapNum(2,3));
// before swap: a => 2, b => 3
// after swap: a => 3, b => 2


