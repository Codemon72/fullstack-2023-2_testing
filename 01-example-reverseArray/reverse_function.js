function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function expect_to_be_equal(actual, expected) {
  if (compareArrays(actual, expected)) {
    console.log("Test passed!");
  } else {
    console.log(`Expected ${expected}, but got ${actual}`);
  }
}

function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
  }
  return output;
}

const a = [5,4,3,2,1];

console.log('initial', a)
console.log('reversed', reverse(a))

expect_to_be_equal([1,2,3,4,5], reverse([5,4,3,2,1]))