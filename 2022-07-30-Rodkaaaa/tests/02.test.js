const sumaTodos = require('../02.js');

describe('sumaTodos', function() {
  it('should return 9 for [2,4]', function() {
      expect(sumaTodos([2,4])).toBe(9)
  })
  it('should return 15 for [0,5]', function() {
    expect(sumaTodos([0,5])).toBe(15)
  })
  it('should return 5 for [5,5]', function() {
    expect(sumaTodos([5,5])).toBe(5)
  })
})