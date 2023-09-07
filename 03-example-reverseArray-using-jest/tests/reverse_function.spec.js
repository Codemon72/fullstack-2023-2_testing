const { reverse } = require('../utils/reverse_function');

test("my first test", () => {
  expect(2).toEqual(2);
})

describe("reverse", () => {
  it("reverses an array successfully", () => {
    expect(reverse([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })
  it("reverses an array and that is never same as before", () => {
    expect(reverse([5,4,3,2,1])).not.toEqual([5,4,3,2,1])
  })
  it("reverses an one-element array and that is the same as before", () => {
    expect(reverse([5])).toEqual([5])
  })
})