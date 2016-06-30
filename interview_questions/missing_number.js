// Find missing number in an array of integers

// increment through the array the number of times as the length return
// index number if not found is returned


// solution 1
function checkArray(arr){
  var checkObj = {};
  var i;
  var j;
  for (i = 1; i <= arr.length; i++){
    checkObj[i] = false;
    for (j = 0; j < arr.length; j++){
      if (arr[j] === i) {
        checkObj[i] = true;
        break;
      };
    };
    if (!checkObj[i]) {
      return i;
    };
  };
};

var timeInMs = Date.now();
console.log(checkArray([3,2,8,7,6,1,4,9])); // 5
console.log("Iterating took " + (Date.now() - timeInMs) + "ms");
// this is 17ms
// O(n^2)

// Alternatly use a mathamatical function to determine missing number.
// if you have a list of numbers n long then the sum of all the numbers
// should = n * (n + 1) / 2

// for instance [1,2,3,4] this sum is 10 which == 4*5/2
// so if you sum the array and subtract from the expected result then
// you know what is missing.
// So for instance [1,2,4] = 7  and 10 - 7 = 3 which is the missing number

function checkArray2(arr){
  var idealLength = arr.length + 1;
  var estSum = (idealLength * (idealLength + 1)) / 2;
  var sum = 0;
  var k;
  for (k = 0; k < arr.length; k++) {
    sum += arr[k];
  };
  return estSum - sum;
};

var timeInMs = Date.now();
console.log(checkArray2([3,2,8,7,6,1,4,9])); // 5
console.log("Iterating took " + (Date.now() - timeInMs) + "ms");
// this took 0ms
// O(n)


// alternitivly using reduce to sum the array

function checkArray3(arr){
  var idealLength = arr.length + 1;
  var estSum = (idealLength * (idealLength + 1)) / 2;
  var sum = arr.reduce(function(total, ele){
    return ele + total;
  });
  return estSum - sum;
};

var timeInMs = Date.now();
console.log(checkArray3([3,2,8,7,6,1,4,9])); // 5
console.log("Iterating took " + (Date.now() - timeInMs) + "ms");
// this took 0ms
// O(n)
