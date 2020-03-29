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

// Clase que implementa un animal
class Animal {
    constructor (name) {
      this.speed = 0;
      this.name = name;
    }
    run (speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop () {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }

  // Clase que implementa un conejo
  class Rabbit extends Animal {
    hide(name) {
      console.log(`${this.name}
          hides!`);
    }
  }

  // Clase que implementa un león
  class Lion extends Animal {
    bite(name) {
      console.log(`${this.name} has bitten you!!`);
    }
  }
  