import { Injectable } from '@angular/core';
import { Autor } from './autor.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

//Para que no se agregue en providers app.module
@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  baseURL = environment.baseUrl;
  private autoresLista: Autor[] = [];
  private autoresSubject = new Subject<Autor[]>();

  constructor(private http: HttpClient) {}

  obtenerAutores() {
    this.http
      .get<Autor[]>(this.baseURL + 'api/LibreriaAutor')
      .subscribe((data) => {
        this.autoresLista = data;
        this.autoresSubject.next([...this.autoresLista]);
      });
    return this.autoresLista.slice();
  }

  obtenerActualListener() {
    return this.autoresSubject.asObservable();
  }
}
