// How would you reverse a string?

function reverse(str) {
  var revStr = "";

  for (var i = str.length-1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}


console.log(reverse('Hey there'));
// 'ereht yeH'

// NOTE: Concatenation becomes slow in older browsers like IE8.




// ---------------------------------
// How can we make this better?



function reverse2(str) {
  var revStr = [];

  for (var i = str.length-1; i >= 0; i--) {
    revString.push(str[i]);
  }

  return revStr.join('');
}


console.log(reverse('Hey there'));
// 'ereht yeH'

// Runtime complexity is O(n).



// -----------------------------------
// Recursive?



function reverse3(str) {
  if (str === "") {
    return str;
  } else {
    return reverse(str.substr(1)) + str[0];
  }
}

console.log('Recursive: ');
console.log(reverse('Hey there'));



// -----------------------------------
// Can you use a built-in method to clean it up?



function reverse4(str) {
  if (!str || str.length < 2)
    return str;

  return str.split('').reverse().join();
}

console.log('With built-in .reverse(): ');
console.log(reverse('Hey there'));
// 'ereht yeH'



// ------------------------------------
// Can you make it a string extension?



String.prototype.reverse = function() {
  if (!str || str.length < 2)
    return str;

  return str.split('').reverse().join();
}


console.log('With built-in .reverse(): ');
console.log(reverse('Hey there'));
// 'ereht yeH'