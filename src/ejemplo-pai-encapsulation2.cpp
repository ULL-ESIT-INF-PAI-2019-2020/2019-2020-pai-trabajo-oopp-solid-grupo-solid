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
  public:
  std::string name;
  std::vector<int> dni;

  person(std::string, int);
  ~person();
};

Person panadero(Juan, 51100000);
panadero.dni = 51100001;