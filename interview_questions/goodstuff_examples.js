// Example questions and solutions from JS "the goodstuff" on frontend masters
// These build upon each other.  They start easy and get harder or more
// convoluted.

// prob 1
// Make a function that returns and argument

// Solution
function identity(arg){
  return arg;
};

// prob 2
// Make a function add that adds two numbers & mul that multiplys them

// Solution
function add(num1, num2){
  return num1 + num2;
};

function mul(num1, num2){
  return num1 * num2;
};

// prob 3
// Make a function returns a function that returns the argument
// from the original function call
// For Example identifyf("hello")() // "hello"

// Solution
function identityf(arg){
  return function(){
    return arg;
  };
};

// prob 4
// Make a function addf that takes a number and returns a function
// that when called with another argument returns the sum
// For example addf(3)(4) // 7

// Solution
function addf(num1){
  return function(num2){
    return add(num1, num2);
  };
};

// prob 5
// Make a function applyf that takes a function
// that when called two seperate arguments applys the function
// originally sent
// For example applyf(add)(3)(4) // 7

// Solution
function applyf(funct){

  return function(num1){
    return function(num2){
      return funct(num1,num2);
    };
  };
};

// prob 6
// Make a curry function that takes a function, and an argument
// that when called with another arugment
// applys the function to both arguments

// For example addTen = curry(add, 10)
// addTen(5) // 15

// Solution

function curry(funct, num1){
  return function(num2){
    return funct(num1, num2);
  };
};

// prob 7
// Make a function methodize that adds a method to a object
// that can be called later on that object

// For example Number.prototype.add = methodize(add)
// (3).add(4) // 7

// Solution
function methodize(func){
  return function (num){
    return func(this,num);
  };
};

// prob 8
// Make a function demethodize that will apply the function as originally
// called

// For example demethodize(Number.prototype.add)(5,6) // 11

// Solution
function demethodize(func){
  return function(that, y){
    return func.call(that, y); // applies the method as a pure function
  };
};

// prob 9
// Make a function twice that will apply the function to an argument twice

// For example double = twice(add)
// square = twice(mul)
// double(5) // 10
// square(5) // 25

// Solution
function twice(func){
  return function(num){
    return func(num, num);
  };
};

// prob 10
// Make a function composeu that will take two functions as arguments
// and return a function
// that can take an argument and apply both functions to the argument

// composeu(double, square)(3) // (3+3)*(3+3) = 36

// Solution
function composeu(func1, func2){
  return function(arg){
    return func2(func1(arg));
  };
};


// prob 11
// Make a function composeu that will take two functions as arguments
// and return a function
// that can take 3 arguments and apply both functions to them

// example composeb(add, mul)(2, 3, 5) // (2+3) * 5 = 25

// Solution

function composeb(func1, func2){
  return function(num1, num2, num3){
    return func2(num3,func1(num1, num2));
  };
};

// prob 12
// Make a function once that will take a function as an argument
// and only allow it to be run once or throw an error

// add_once = once(add)
// console.log(add_once(3, 4)); // 7
// console.log(add_once(3, 4)); // error "can only call once"

// solution (two ways)

// function once(func){
//   var counter = 0;
//   return function(num1, num2){
//     if (counter === 0 ){
//       counter += 1;
//       return func(num1, num2);
//     } else {
//       throw ("can only call once!");
//     }
//   };
// };

// function once(func){
//   return function(){
//     f = func;
//     func = null;
//     return f.apply(this,arguments);
//   };
// };

// prob 13
// Make a function counterf that will allow inc or dec to the argument
// which will increment or decrement by 1

// counter = counterf(10)
// console.log(counter.inc()); // 11
// console.log(counter.dec()); // 10

// solution


function counterf(num){
  var currentNum = num;
  return {
    inc: function(){
      return currentNum += 1;
    },
    dec: function(){
    return currentNum -= 1;
    }
  };
};



console.log(identity(3));
console.log(add(3, 4));
console.log(mul(3, 4));

var idf = identityf(3);
console.log(idf());

console.log(addf(3)(4));
console.log(applyf(add)(3)(4));
console.log(applyf(mul)(3)(4));
var add3 = curry(add, 3);
var mul3 = curry(mul, 3);
console.log(add3(4));
console.log(mul3(4));

var inc = curry(add, 1);
console.log(inc(4));
var inc = applyf(add)(1);
console.log(inc(5));
var inc = addf(1);
console.log(inc(6));

Number.prototype.add = methodize(add)
console.log((3).add(4));

console.log(demethodize(Number.prototype.add)(5,6));

var double = twice(add);
var square = twice(mul);

console.log(double(11));
console.log(square(5));
console.log(composeu(double, square)(3));
console.log(composeb(add, mul)(2, 3, 5));

// add_once = once(add)
// console.log(add_once(3, 4));
// console.log(add_once(3, 4));

var counter = counterf(10)
console.log(counter.inc());
console.log(counter.dec());
