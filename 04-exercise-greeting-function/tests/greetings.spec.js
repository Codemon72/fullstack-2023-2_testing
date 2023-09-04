const { generateGreeting } = require('../utils/greetings');

const possibleGreetings = ['Hello', 'Hi', 'Greetings', 'Hey'];

describe("generateGreeting", () => {
  describe("when NO gender is provided", () => {
    it("returns a random greeting without the title", () => {
      const greeting = generateGreeting("John");
      const parts = greeting.split(" ");
      const greetingWord = parts[0];
      const name = parts[1];

      expect(possibleGreetings).toContain(greetingWord);
      expect(name).toEqual("John");
    });
  });
  describe("when gender 'male' is provided", () => {
    it("returns a random greeting with the title 'Mr'", () => {
      const greeting = generateGreeting("John", "male");
      const parts = greeting.split(" ");
      const greetingWord = parts[0];
      const title = parts[1];
      const name = parts[2];

      expect(possibleGreetings).toContain(greetingWord);
      expect(title).toEqual("Mr.");
      expect(name).toEqual("John");
    });
  });
  describe("when gender 'female' is provided", () => {
    it("returns a random greeting with the title 'Mr'", () => {
      const greeting = generateGreeting("Jane", "female");
      const parts = greeting.split(" ");
      const greetingWord = parts[0];
      const title = parts[1];
      const name = parts[2];

      expect(possibleGreetings).toContain(greetingWord);
      expect(title).toEqual("Mrs.");
      expect(name).toEqual("Jane");
    });
  });
});