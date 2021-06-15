const assert = require('assert');

// WRITE CAPITALIZE FIRST LETTERS

function capitalizeFirstLetters(input) {
  return input
    ? [...input]
        .map((char, index) => {
          return index === 0 || input[index - 1] === ' '
            ? input[index].toUpperCase()
            : input[index];
        })
        .join('')
    : input;
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms a multiple word phrase
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters('omg'), 'Omg');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

console.log(capitalizeFirstLetters('woo Woop wooo boo SRREE'));
