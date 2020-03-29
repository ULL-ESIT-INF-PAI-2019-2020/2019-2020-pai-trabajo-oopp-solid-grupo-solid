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
let firstPoint = {x:1, y:1};
let secondPoint = {x:5, y:3};
let thirdPoint = {x:7, y:1};
let triangle = [firstPoint, secondPoint, thirdPoint];

// Traslation of 5 in X
for (let pointIter = 0; pointIter < triangle.length; pointIter++) {
  triangle[pointIter].x += 5;
}
// Traslation of 2 in Y
for (let pointIter = 0; pointIter < triangle.length; pointIter++) {
  triangle[pointIter].y += 2;
}
// 90 degree rotation
for (let pointIter = 0; pointIter <    triangle.length; pointIter++) {
  let newPoint = {};
  newPoint.x = -(triangle[pointIter].y)
  newPoint.y = triangle[pointIter].x;
  triangle[pointIter] = newPoint;
}
