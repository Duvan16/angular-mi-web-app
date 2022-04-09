import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LibrosService } from '../Services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input()
  tituloLibro!: string;
  @Output() libroClicked = new EventEmitter();

  constructor(private libroService: LibrosService) {}

  onClicked() {
    //this.libroClicked.emit();
    this.libroService.eliminarLibro(this.tituloLibro);
  }
}
