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

// ------- NO CUMPLE DIP -------
class Milk {
  // implementation
}
 
class Coffee {
  constructor(milk) {
    this.milk = milk
  }
 
  cost() {
    // calculate the cost
  }
}
 
// ------- CUMPLE DIP -------
class Ingredient {
  // implementation
}
 
class Milk extends Ingredient {
  // implementation
}

class Beverage {
  constructor(ingredient) {
    this.ingredient = ingredient
  }
  cost() {
    // calculate the cost
  }
}
class Coffee extends Beverage {
  cost() {
    // calculate the cost
  }
}
 