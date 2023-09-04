const { reverse } = require('../utils/reverse_function');

test("my first test", () => {
  const actual = 9;
  const expected = 9;

  expect(actual).toBe(expected);
})

describe("reverse", () => {
  it("reverse an array successfully", () => {
    expect(reverse([1,2,3,4,5])).toEqual([5,4,3,2,1])
  })
  it("a reversed array is never the same", () => {
    expect(reverse([1,2,3,4,5])).not.toEqual([1,2,3,4,5])
  })
})