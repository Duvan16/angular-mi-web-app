import { Injectable } from '@angular/core';
import { Autor } from './autor.model';

//Para que no se agregue en providers app.module
@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  private autoresLista: Autor[] = [
    { autorId: 1, nombre: 'Duvan', apellido: 'Gonza', gradoAcademico: 'Ingen' },
    {
      autorId: 2,
      nombre: 'Lorenzo',
      apellido: 'Ramirez',
      gradoAcademico: 'Matematica',
    },
    {
      autorId: 3,
      nombre: 'Juan',
      apellido: 'Alvarez',
      gradoAcademico: 'Ciencias de la computación',
    },
    {
      autorId: 4,
      nombre: 'Roberto',
      apellido: 'Arcila',
      gradoAcademico: 'Ingenieria de sistemas',
    },
  ];

  obtenerAutores() {
    return this.autoresLista.slice();
  }
}
