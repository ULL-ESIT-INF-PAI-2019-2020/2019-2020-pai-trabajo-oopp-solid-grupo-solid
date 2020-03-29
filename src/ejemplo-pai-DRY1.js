/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Presentación SOLID - OOP
   Autor: Sergio Guerra Arencibia
   Correo: alu0101133201@ull.edu.es
   Fecha: 28/03/2020
   Contenido: Programas teóricos usados para representar
   los distintos principios SOLID
*/

function myFunctionA (arr, factor) {
  let len = arr.length;
  let min = Infinity;

  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return (Math.cos(min) * factor);
}

function myFunctionB (arr) {
  let len = arr.length;
  let min = Infinity;

  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  let shortestPath = new distance(min);
  shortestPath.draw();
  return (shortestPath.time);
}
