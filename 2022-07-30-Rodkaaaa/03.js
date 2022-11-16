/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function checkInventario(inventario, item) {
  // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
  // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
  // La funcion debe devolver la cantidad de items que hay.
  // Si el item no existe la funcion tiene que devolver 0 (cero).
  // Ej:
  // var inventario = [
  //   {
  //     nombre: 'tenedor',
  //     cantidad: 6
  //   },
  //   {
  //     nombre: 'cuchara',
  //     cantidad: 4,
  //   },
  // ]
  // checkInventario(inventario, 'tenedor') devuelve => 6

  // Tu código aca:
  newArray = inventario.find((e)=> e.nombre === item )?.cantidad || 0;
  return newArray
 
  
}

// No modifiques nada debajo de esta linea //

module.exports = checkInventario