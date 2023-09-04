// E1: Go back to the code to reverse an array. Put that into a function so that the rest of the code looks like this:

function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
  }
  return output;
}

console.log(reverse([5,4,3,2,1]))

function expect_to_be_equal(actual, expected) {
  if (compareArrays(actual, expected)) {
    console.log("Test passed!");
  } else {
    console.log(`Expected ${expected}, but got ${actual}`);
  }
}

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

expect_to_be_equal(reverse([5,4,3,2,1]), [1,2,3,4,5]);