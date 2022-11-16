const crearClasePersona = require('../06-07-08.js');

describe('crearClasePersona', function() {
  it('should add a hobbie with addHobby', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
      persona.addHobby('hobbie');
      expect(persona.hobbies[1]).toBe('hobbie');
  });
  it('should get all friends with getFriends', function() {
    const Persona = crearClasePersona();
    const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]);
    expect(persona.getFriends()).toEqual(['martin','toni']);
  });
});