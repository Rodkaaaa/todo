const crearClasePersona = require('../06-07-08.js');

describe('crearClasePersona', function() {
  it('should get all hobbies with getHobbies', function() {
    const Persona = crearClasePersona();
    const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
    expect(persona.getHobbies()).toEqual(['futbol']);
  });
  it('should get age average with getPromedioEdad', function() {
    const Persona = crearClasePersona();
    const persona = new Persona('toni', 23, ['futbol'], [{
        nombre: 'toni',
        edad: 33,
      }, {
        nombre: 'Emi',
        edad: 25
      }]);
    expect(persona.getPromedioEdad()).toBe(29);
  });
});