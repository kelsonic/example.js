// Example questions and solutions from JS "the goodstuff" on frontend masters
// These build upon each other.  They start easy and get harder or more
// convoluted.

// prob 1
// Make a function that returns and argument

// Solution
function identity(arg){
  return arg;
};
console.log("problem 1");
console.log(identity(3)); // returns 3
// prob 2
// Make a function add that adds two numbers & mul that multiplys them

// Solution
function add(num1, num2){
  return num1 + num2;
};

function mul(num1, num2){
  return num1 * num2;
};

function sub(num1, num2){
  return num1 - num2;
};

console.log("problem 2");
console.log(add(3, 4)); // returns 7
console.log(mul(3, 4)); // returns 12
console.log(sub(4, 3)); // returns 1
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

console.log("problem 3");
var idf = identityf(3);
console.log(idf()); // returns 3

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

console.log("problem 4");
console.log(addf(3)(4)); // returns 7


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
console.log("problem 5");
console.log(applyf(add)(3)(4)); // returns 7
console.log(applyf(mul)(3)(4)); // returns 12
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

console.log("problem 6");
var add3 = curry(add, 3); // adds 3 to arguments using this function
var mul3 = curry(mul, 3); // multiplies 3 to arguments using this function
console.log(add3(4)); // returns 7
console.log(mul3(4)); // returns 12


//  using the functions above how would you add 1 to a Number
// 3 different ways
// solutions
console.log("extra problems");
var inc = curry(add, 1);
console.log(inc(4));
var inc = applyf(add)(1);
console.log(inc(5));
var inc = addf(1);
console.log(inc(6));

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

console.log("problem 7");
Number.prototype.add = methodize(add); // adds add to Number objects
console.log((3).add(4)); // returns 12

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

console.log("problem 8");
console.log(demethodize(Number.prototype.add)(5,6)); // invokes the add function
// result is 11

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

var double = twice(add);
var square = twice(mul);
console.log("problem 9");
console.log(double(11)); // returns 22
console.log(square(5)); // returns 25

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

console.log("problem 10");
console.log(composeu(double, square)(3)); // returns 36

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
console.log("problem 11");
console.log(composeb(add, mul)(2, 3, 5)); // returns 25

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
// console.log("problem 12");
// add_once = once(add)
// console.log(add_once(3, 4)); // returns 7
// console.log(add_once(3, 4)); // undefined




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

console.log("problem 13");
var countf = counterf(10)
console.log(countf.inc()); // returns 11
console.log(countf.dec()); // returns 10

// prob 14
// Write a function that reverses the order of a binary functions
// arguments then return the value of the binary function

// var rsub = reverse(sub)
// rsub(3,2) // returns -1
// solution
function reverse(binary) {
  return function(num1, num2) {
    return binary(num2, num1);
  };
};
var rsub = reverse(sub)
console.log("problem 14");
console.log(rsub(3,2)); // return -1


// prob 15
// Write a function that increments and returns the value each time
// it is called

function from(start){
  var value = start;
  return function(){
    value += 1;
    return value - 1;
  };
}

var index = from(0);
console.log("problem 15");
console.log(index()); // 0
console.log(index()); // 1
console.log(index()); // 2

// Problem 16
// write a function to that takes a that returns a generator
// that will go up till the limit

// example index = to(from(1),3)
// index() // 1
// index() // 2
// index() // undefined

function to(func, limit){
  return function(){
    var value = func();
    if (value < limit){
      return value;
    };
    return undefined;
  };
};

var index = to(from(1), 3);
console.log("problem 16");
console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined

// Prob 17
// write a generator function that takes arguments from and to and
// increments up to the end value
// example index = fromTo(1,3)
// index() // 1
// index() // 2
// index() // undefined
function fromTo(num1, num2){
  return to(from(num1), num2);
};

var index = fromTo(1, 3);
console.log("problem 17");
console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined

// Prob 18
// Write an element function that takes a generator and an array
// and will produce a generator that outputs from the array
// example var ele = element(["a","b","c","d"], fromTo(1,3))
// ele() // "b"
// ele() // "c"
// ele() // undefined

function element(array, gen) {
  return function() {
    var index = gen();
    if (index !== undefined){
      return array[index];
    }
    return index
  };
};

var ele = element(["a","b","c","d"], fromTo(1,3));
console.log("problem 18");
console.log(ele()); // "b"
console.log(ele()); // "c"
console.log(ele()); // undefined

// prob 19
// Modify element function that takes a generator as an option and an array
// if the generator is missing then it will return all array objects
// example var ele = element(["a","b","c","d"])
// ele() // "a"
// ele() // "b"
// ele() // "c"
// ele() // "d"
// ele() // undefined

function element(array, gen) {
  if (gen === undefined){
    var gen = fromTo(0, array.length)
  }
  return function() {
    var index = gen();
    if (index !== undefined){
      return array[index];
    }
    return index
  };
};

var ele = element(["a","b","c","d"]);
console.log("problem 19");
console.log(ele()); // "a"
console.log(ele()); // "b"
console.log(ele()); // "c"
console.log(ele()); // "d"
console.log(ele()); // undefined

// prob 20
// Write a function collect that takes a generator and an array
// and collects the results from the generator into the array
// example var array = [], var col = collect(from(0,2),array)
// col() // "0"
// col() // "1"
// col() // "undefined"
// array // [0,1]

function collect(gen, array) {
  return function() {
    var value = gen();
    if (value !== undefined){
      array.push(value);
    }
    return value
  };
};
var array = [];
var col = collect(fromTo(0,2), array);
console.log("problem 20");
console.log(col()); // "0"
console.log(col()); // "1"
console.log(col()); // "undefined"
console.log(array); // [0,1]

// prob 21
// Write a function filter that takes a generator and a preticate
// function and returns only values that are meet the preticate
// example var fil = filter(fromTo(0,5), function third(value){
//  return (value %3 ) === 0;
// })
// fil() // "0"
// fil() // "3"
// fil() // "undefined"


function filter(gen, pret) {
  return function check () {
    var value = gen()
    if (value === undefined || (pret(value))) {
      return value;
    } else {
      return check();//recursively checks until pret is true or value undefined
    }
  };
};

var fil = filter(
  fromTo(0,5),
  function third(value){
    return (value % 3 ) === 0;
  });
console.log("problem 21");
console.log(fil()); // "0"
console.log(fil()); // "3"
console.log(fil()); // "undefined"

// prob 22
// Write a function filter that concatinates two generators to sequentially
// run the first then the second
// example var con = concat(fromTo(0,3),fromTo(0,2))
// con() // "0"
// con() // "1"
// con() // "2"
// con() // "0"
// con() // "1"
// con() // "undefined"

function concat(gen1, gen2) {
  return function() {
    var value = gen1();
    if (value === undefined) {
      value = gen2();
    }
    return value;
  };
};

var con = concat(fromTo(0,3),fromTo(0,2))
console.log("problem 22");
console.log(con()); // "0"
console.log(con()); // "1"
console.log(con()); // "2"
console.log(con()); // "0"
console.log(con()); // "1"
console.log(con()); // "undefined"

// prob 23
// Write a function gensymf that take a symbol and makes a unique idenifier
// example
// var geng = gensymf("G");
// var genh = gensymf("H");
// geng() // "G1"
// genh() // "H1"
// geng() // "G2"
// genh() // "H2"


function gensymf(symb) {
  var id = 0
  return function() {
    id += 1
    return symb + id;
  };
};

var geng = gensymf("G");
var genh = gensymf("H");
console.log("problem 23");
console.log(geng()); // "G1"
console.log(genh()); // "H1"
console.log(geng()); // "G2"
console.log(genh()); // "H2"

// prob 24
// Write a function fibonaccif that returns the next fibonacci number
// each time it is called
// example
// var fib = fibonaccif(0, 1);
// fib() // "0"
// fib() // "1"
// fib() // "1"
// fib() // "2"
// fib() // "3"
// fib() // "5"

function fibonaccif(arg1, arg2) {
  var fib1 = arg1;
  var fib2 = arg2;
  return function() {
    var value = fib1;
    fib1 = fib2;
    fib2 += value;
    return value;
  };
};
console.log("problem 24");
var fib = fibonaccif(0, 1);
console.log(fib()); // "0"
console.log(fib()); // "1"
console.log(fib()); // "1"
console.log(fib()); // "2"
console.log(fib()); // "3"
console.log(fib()); // "5"

// OOJS section

// prob 25
// Write a counter function that can increment up and down
// hiding the counter
// example
// var object = counter(10);
// var up = object.up;
// var down = object.down;
// up(); //  11
// down(); // 10

function counter(number){
  return {
    up: function(){
      number += 1;
      return number;
    },
    down: function(){
      number -= 1;
      return number;
    }
  };
};

console.log("problem 25");
var object = counter(10);
var up = object.up;
var down = object.down;
console.log(up()); // "11"
console.log(down()); // "10"
console.log(down()); // "9"
console.log(up()); // "10"


// converts object to a string
// given function m below
function m(value, source){
  return{
    value: value,
    source: (typeof source === "string")
      ? source : String(value)
  };
}

// prob 26
// write function addm1 that takes 2 m objects and returns an m
// example
// JSON.stringify(addm1(m(3), m(4)))
// returns { "value": 7 , "source": "(3+4)"}
// JSON.stringify(addm1(m(1), m(Math.PI, "pi")))
// returns { "value": 4.314..., "source": "(1+pi)"}

function addm1(obj1, obj2){
  return m(
    obj1.value + obj2.value,
    "(" + obj1.source + "+" + obj2.source + ")"
  );
};
console.log("problem 26");
console.log(JSON.stringify(addm1(m(3), m(4))));
console.log(JSON.stringify(addm1(m(1), m(Math.PI, "pi"))));


// prob 27
// write function liftm that takes a binary function and string
// and returns a function that acts on m objects
// example
// var addm = liftm(add, "+");
// JSON.stringify(addm(m(3), m(4)))
// returns { "value": 7 , "source": "(3+4)"}

function liftm(binary, string){

  return function(obj1,obj2){
    return m(
      binary(obj1.value, obj2.value),
      "(" + obj1.source + string + obj2.source + ")"
    );
  };
};
console.log("problem 27");
var addm = liftm(add, "+");
var mulm = liftm(mul, "*");
console.log(JSON.stringify(addm(m(3), m(4))));
console.log(JSON.stringify(mulm(m(3), m(4))));

// prob 28
// modify function liftm so that the function can take m objects or numbers
// and returns a function that acts on m objects
// example
// var addm = liftm(add, "+");
// JSON.stringify(addm(m(3), m(4)))
// returns { "value": 7 , "source": "(3+4)"}

function liftm(binary, string){
  var convert = function(arg){
    if (typeof arg === 'number'){
      return m(arg);
    };
    return arg;
  }; // private function
  return function(obj1,obj2){
    obj1 = convert(obj1); // uses private function to check type
    obj2 = convert(obj2); // uses private function to check type
    return m(
      binary(obj1.value, obj2.value),
      "(" + obj1.source + string + obj2.source + ")"
    );
  };
};
console.log("problem 28");
var addm = liftm(add, "+");
var mulm = liftm(mul, "*");
console.log(JSON.stringify(addm(3, m(4))));
console.log(JSON.stringify(mulm(m(3), 4)));

// problem 29
// Write a function exp that evaluates a simple array expression
// example [function, arg1, arg2]
// var sae = [mul, 5, 11]
// exp(sae) // 55
// exp(42) // 42

function exp(array){
  if (Array.isArray(array)){
    return array[0](array[1], array[2]);
  };
  return array;
};
console.log("problem 29");
var sae = [mul, 5, 11]
console.log(exp(sae)); // 55
console.log(exp(42)); // 42

// problem 30
// modify exp to allow it to take nested array expressiongs
// example
// calculate the hypotanuse of a triangle with this
// var nae = [Math.sqrt[add,[square, 3], [square, 4]]]
// exp(nae) // 5
function exp(arr){
  if (Array.isArray(arr)){
    return arr[0](exp(arr[1]), exp(arr[2]));// recursively call the arguments
  };
  return arr;
};
console.log("problem 30");
var nae = [Math.sqrt,[add,[square, 3], [square, 4]]]
console.log(exp(nae)); // 5

// problem 31
// write a function addg that takes many invocations and adds them until it
// receives a empty invoacation
// example
// addg() // undefined
// addg(2)() // 2
// addg(3)(0)(2)() // 5

function addg(first){
  function more(next){
    if (next === undefined){
      return first;
    }
    first += next;
    return more; // self returning function!!! keeps going till hits undefined
  }
  if (first !== undefined){
    return more;
  }
};

console.log("problem 31");
console.log(addg()); // undefined
console.log(addg(2)()); // 2
console.log(addg(3)(0)(2)()); // 5

// problem 32
// write a function liftg that takes a function and many invocations
// and applies them until no arguments are sent
// example
// liftg(mul)() // undefined
// liftg(mul)(2)() // 2
// liftg(mul)(3)(0)(2)() // 0
// liftg(mul)(3)(2)(2)() // 12

function liftg(func){
  return function(first){
    if (first === undefined){
      return first;
    };
    return function more(next){
      if (next === undefined){
        return first;
      };
      first = func(first, next);
      return more;
    };
  };
};

console.log("problem 32");
console.log(liftg(mul)()); // undefined
console.log(liftg(mul)(2)()); // 2
console.log(liftg(mul)(3)(0)(2)()); // 0
console.log(liftg(mul)(3)(2)(2)()); // 12

// problem 33
// write a function arrayg that takes many invocations
// and puts them into an array until no arguments were passed
// example
// arrayg() // []
// arrayg(2)() // [2]
// arrayg(3)(0)(2)() // [3,0,2]


function arrayg(func){
  return function(first){
    if (first === undefined){
      return first;
    };
    return function more(next){
      if (next === undefined){
        return first;
      };
      first = func(first, next);
      return more;
    };
  };
};

console.log("problem 33");
console.log(liftg(mul)()); // undefined
console.log(liftg(mul)(2)()); // 2
console.log(liftg(mul)(3)(0)(2)()); // 0
console.log(liftg(mul)(3)(2)(2)()); // 12
