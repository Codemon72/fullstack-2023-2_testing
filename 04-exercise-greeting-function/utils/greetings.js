function generateGreeting(name, gender = null) {
  const greetingWords = ['Hello', 'Hi', 'Greetings', 'Hey'];
  const randomIndex = Math.floor(Math.random() * greetingWords.length);
  let greeting = greetingWords[randomIndex];

  if (gender === 'female') {
    greeting += ' Mrs. ' + name;
  } else if (gender === 'male') {
    greeting += ' Mr. ' + name;
  } else {
    greeting += ' ' + name;
  }

  return greeting;
}

module.exports = {
  generateGreeting
}