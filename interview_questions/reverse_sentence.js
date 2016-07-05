// How would you reverse words in a sentence?

function reverseWords(str) {

  var rev = [],
      wordLen = 0;

  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == " " || i == 0) {
      rev.push(str.substr(i, wordLen+1).trim());
      wordLen = 0;
    }
    else {
      wordLen++;
    }
  }
  return rev.join(' ');
}

console.log(reverseWords('I am wondering if you can read this'));
//  this read can you if wondering am I



// --------------------------------------
// Can you write this shorter?



// Why yes, yes I can.


function reverseWords2(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords2('I am wondering if you can read this'));
//  this read can you if wondering am I