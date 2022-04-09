import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../Services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: any = [];
  private libroSubscription: Subscription = new Subscription();

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();
  }

  eliminarLibro(libro: string) {}

  guardarLibro(f: any) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }
}
