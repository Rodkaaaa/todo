const index = require('../05.js');

describe('index', function() {
  index();
  var numeros = [5, 6, 4, 65, 8, 4]
  var strings = ['henry', 'programmer','javascript'];
  it('should return index', function() {
    expect(numeros.encontraIndex(4)).toBe(2);
  })
  it('should return -1 if no element found', function() {
    expect(strings.encontraIndex('js')).toBe(-1);
  })
})