const cuantosRepetidos = require('../09.js');

describe('cuantosRepetidos', function() {
  let items1 = [["manzana", "naranja"],["sandia", "pera"],["uva", "manzana"]];
  let items2 = [[3,23,1],[9,23,5],[1,23,8]]
  it('should return 2 for [["manzana", "naranja"],["sandia", "pera"],["uva", "manzana"]] and "manzana"', function() {
      expect(cuantosRepetidos(items1, 'manzana')).toBe(2);
  });
  it('should return 3 for [[3,23,1],[9,23,5],[1,23,8]] and 23', function() {
    expect(cuantosRepetidos(items2, 23)).toBe(3);
  });
});