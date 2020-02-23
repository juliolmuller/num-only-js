const numOnly = require('../')

/**
 * Assert whether two values are equals
 *
 * @param {any} input
 * @param {string} output
 */
function assertEquals(input, output) {
  console.log(numOnly(input) === output)
}

assertEquals('Testing with string', '')
assertEquals('testing123', '123')
assertEquals('123.456.789-10', '12345678910')
assertEquals(['a', 1, '2'], '12')
assertEquals(Infinity, '')
assertEquals(undefined, '')
assertEquals(null, '')
assertEquals({ a: 1, b: 2 }, '')
assertEquals({ toString: () => 123 }, '123')
assertEquals(Date, '')
assertEquals(Error, '')
assertEquals(() => 'abc123', '123')
