import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject: any = new Subject();

  private libros = ['Libro de Duvan', 'Libro de Aritmetni', 'Libro de Grafica'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter((x) => x !== libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros() {
    return [...this.libros]; //Spreed operator ...
  }
}
