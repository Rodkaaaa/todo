const checkInventario = require('../03.js');

describe('checkInventario',function(){
  let inventario = [
    {
      nombre: 'tenedor',
      cantidad: 6
    },
    {
      nombre: 'cuchara',
      cantidad: 4,
    },
  ]
  it('should return 6', function(){
    expect(checkInventario(inventario, 'tenedor')).toBe(6);
  })
  it('should return 4', function() {
    expect(checkInventario(inventario, 'cuchara')).toBe(4);
  })
  it('should return 0', function() {
    expect(checkInventario(inventario, 'cucharon')).toBe(0);
  })
})