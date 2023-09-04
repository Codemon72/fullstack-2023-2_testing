const { generateGreeting } = require('./utils/greetings');

// Example usage
console.log(generateGreeting('John', 'male')); // Output: Hi Mr. John
console.log(generateGreeting('Lisa', 'female')); // Output: Hello Mrs. Lisa
console.log(generateGreeting('Anna')); // Output: Hey Anna
console.log(generateGreeting('Mike', 'other')); // Output: Greetings Mike