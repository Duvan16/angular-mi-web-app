import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  libros = ['Matematica', 'Algrebra', 'Algoritmos'];

  eliminarLibro(libro: string) {
    this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(f: any) {
    if (f.valid) {
      this.libros.push(f.value.nombreLibro);
    }
  }
}
