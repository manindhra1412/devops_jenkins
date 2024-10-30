const sum = require('./index'); // Correct path for index.js in the same directory

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
