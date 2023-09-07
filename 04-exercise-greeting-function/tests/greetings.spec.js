const { generateGreeting } = require('../utils/greetings');

const possibleGreetingWords = ['Hello', 'Hi', 'Greetings', 'Hey'];

describe("generateGreeting", () => {
  describe("when NO gender is provided", () => {
    it("returns a random greeting without a title", () => {
      const greeting = generateGreeting('Oscar');
  
      const parts = greeting.split(" ")
      const salutation = parts[0]
      const name = parts[1]
  
      expect(possibleGreetingWords).toContain(salutation)
      expect(name).toEqual("Oscar")
    })
  })
  describe("when gender is 'male'", () => {
    it("returns a random greeting with the correct title", () => {
      const greeting = generateGreeting('John', 'male');
  
      const parts = greeting.split(" ")
      const salutation = parts[0]
      const title = parts[1]
      const name = parts[2]
  
      expect(possibleGreetingWords).toContain(salutation)
      expect(title).toEqual("Mr.")
      expect(name).toEqual("John")
    })
  })
  describe("when gender is 'female'", () => {
    it("returns a random greeting with the correct title", () => {
      const greeting = generateGreeting('Marie', 'female');
  
      const parts = greeting.split(" ")
      const salutation = parts[0]
      const title = parts[1]
      const name = parts[2]
  
      expect(possibleGreetingWords).toContain(salutation)
      expect(title).toEqual("Mrs.")
      expect(name).toEqual("Marie")
    })
  })
  test('should generate different greetings randomly', () => {
    const name = 'John';
    const greetings = new Set();

    for (let i = 0; i < 100; i++) {
      const result = generateGreeting(name);
      greetings.add(result);
    }

    expect(greetings.size).toBeGreaterThan(1);
  });
})