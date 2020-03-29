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

class Triangle {
    constructor(points) {
    this.points = points;
  }
  traslationX (distance) {
    for (let pointIter = 0; pointIter < 
        this.points.length; pointIter++) {
    this.points[pointIter].x += distance;
    }
  }
  traslationY (distance) {
    for (let pointIter = 0; pointIter < this.points.length; 
        pointIter++) {
    this.points[pointIter].y += distance;
    }
  }
  rotation() {
    let newPoint = {};
    newPoint.x = -(this.points[pointIter].y)
    newPoint.y = this.points[pointIter].x;
    this.points[pointIter] = newPoint;
    }
  }
  
let firstPoint = {x:1, y:1};
let secondPoint = {x:5, y:3};
let thirdPoint = {x:7, y:1};
let points = [firstPoint, secondPoint, thirdPoint];
let triangle = new Triangle(points);

triangle.traslationX(5);
triangle.traslationY(2);
triangle.rotation();