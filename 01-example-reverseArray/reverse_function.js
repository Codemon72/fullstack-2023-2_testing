function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
  }
  return output;
}

console.log('initial', [5,4,3,2,1])
console.log('reversed', reverse([5,4,3,2,1]))
