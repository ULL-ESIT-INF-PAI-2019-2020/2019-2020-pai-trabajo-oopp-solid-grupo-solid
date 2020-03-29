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

const PI = 3.1416;
 
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
 
 area() {
   return (PI * Math.pow(this.radius, 2));
 }

  perimeter() {
    return (2 * PI * this.radius);
  }
}

class Square {
    constructor(side) {
      this.side = side;
    }
  
    area() {
      return (Math.pow(this.side, 2));
    }
  
    perimeter() {
      return (this.side * 4);
    }
  }

function shapeData(shape) {
  console.log(shape.area());
  console.log(shape.perimeter());
}

let testSquare = new Square(5);  // 25 20
let testCircle = new Circle(3);      // 28.27  18.84
shapeData(testSquare);
shapeData(testCircle);
  