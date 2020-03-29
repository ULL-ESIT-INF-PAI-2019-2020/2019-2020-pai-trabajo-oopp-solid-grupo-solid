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

class Person {
  private:
    std::string name;
    int dni;
 
  public:
    person(std::string, int);
    ~person();
 
    void setName();
    void setDni(int);
    std::string getName();
    int getDni();
};

void Person::setDni(int newDni) {
  if (newDni < 0) {
    throw “DNI must be greater than 0”;
  }
  else {
    dni = newDni;
  }
}

Person panadero(Juan, 51100000);
panadero.setDni(-1);	// Error
panadero.setDni(511000000) // Funciona con cualquier implementación
