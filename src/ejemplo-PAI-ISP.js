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
// ------- NO CUMPLE ISP -------
class IColors {
  paintRed();
  paintYellow();
  paintBlue();
}

class Red extends IColors{
  paintRed() {
    // implementation details to paint red
  }
  paintYellow() {
    // this class doesn't need this method, but still needs an empty implementation.
  }
  paintBlue() {
    // this class doesn't need this method, but still needs an empty implementation.
  }
}

// ------- CUMPLE ISP -------

class IColors {
  paint();
}

class IRed {
  paintRed();
}

class IYellow {
  paintYellow();
}

class IBlue {
  paintBlue();
}

class Red extends IRed {
  paintRed() {
    //...
  }
}

class Yellow extends IYellow {
  paintYellow() {
    //...
  }
}

class Blue extends IBlue {
  paintBlue() {
    //...
  }    
}

class CustomColor extends IColors {
  paint(){
    //...
  }
}
