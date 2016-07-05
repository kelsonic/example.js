// How would you merge two sorted arrays?

function mergeSortedArrays(a, b) {
  var merged = [],
      aElm = a[0],
      bElm = b[0],
      i = 1,
      j = 1;

  if (a.length == 0)
    return b;

  if (b.length == 0)
    return a;

  // While there is at least an element in either array
  while (aElm || bElm) {
    // if there's an element in the first array but not the second, 

    // or if the first element in the first array is less than the first element in the second array
    if ((aElm && !bElm) || (aElm < bElm)) {

      merged.push(aElm);
      aElm = a[i++];
    }
    else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
}


console.log(
  mergeSortedArrays([2,5,6,9], [1,2,3,29])
); // [1, 2, 2, 3, 5, 6, 9, 29]