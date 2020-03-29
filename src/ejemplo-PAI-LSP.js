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

// ------- NO CUMPLE LSP -------
class Bird {
  fly() {
    //
  }
}

class Eagle extends Bird {
  //
}
class Ostrich extends Bird {
  //
}

// ------- CUMPLE LSP -------
class Bird {
}

class FlyingBirds extends Bird{
  fly(){
    //  
  }
} 

class Eagle extends FlyingBirds {
  //
}

class Ostrich extends Bird{
  //
} 

