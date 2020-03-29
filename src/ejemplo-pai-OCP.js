/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Presentación SOLID - OOP
   Autor: Carlos Díaz Calzadilla
   Correo: alu0101102726@ull.edu.es
   Fecha: 28/03/2020
   Contenido: Programas teóricos usados para representar
   los distintos principios SOLID
*/
"use strict"

// ------- NO CUMPLE OCP -------
class Pdf {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  // ...
}

class Png {
  constructor(name) {
    this.name = name;
  }
  // ...
}

class Printer {
  printFile(file) {
    if (file instanceof Pdf) {
      // Print Pdf...
    } else if (file instanceof Png) {
      // Print Png...
    }
  }
}

// ------- CUMPLE OCP -------
class Printable {
  print() {
    // ...
  }
}
  
class Pdf extends Printable {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }
 
  // Override
  print() {
    // ...
  }
}
  
class Png extends Printable {
  constructor(name) {
    super();
    this.name = name;
  }

  // Override
  print() {
    // ...
  }
}
  
class Printer {
  printFile(file) {
    file.print();
  }
}
  