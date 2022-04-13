import { Books } from './books.model';
export class BooksService {
  private booksLista: Books[] = [
    {
      libroId: 1,
      titulo: 'Algoritmos',
      descripcion: 'libro basico',
      autor: 'Duvan',
      precio: 18,
    },
    {
      libroId: 2,
      titulo: 'Angular',
      descripcion: 'libro intermedio',
      autor: 'Heli Arcila',
      precio: 25,
    },
    {
      libroId: 3,
      titulo: 'ASP.NET',
      descripcion: 'Master',
      autor: 'Juan Arevalo',
      precio: 30,
    },
    {
      libroId: 4,
      titulo: 'Java',
      descripcion: 'Agile Libro',
      autor: 'John Ortiz',
      precio: 99,
    },
  ];

  obtenerLibros() {
    return this.booksLista.slice();
  }
}
