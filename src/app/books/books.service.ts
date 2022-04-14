import { Books } from './books.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PaginationBooks } from './pagination-books.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = environment.baseUrl;
  private booksLista: Books[] = [];
  bookSubject = new Subject<Books>();
  bookPagination!: PaginationBooks;
  bookPaginationSubject = new Subject<PaginationBooks>();

  constructor(private http: HttpClient) {}

  obtenerLibros(
    librosPorPagina: number,
    paginaActual: number,
    sort: string,
    sortDirection: string,
    filterValue: any
  ) {
    const request = {
      pageSize: librosPorPagina,
      page: paginaActual,
      sort,
      sortDirection,
      filterValue,
    };

    this.http
      .post<PaginationBooks>(this.baseUrl + 'api/Libro/Pagination', request)
      .subscribe((response: any) => {
        this.bookPagination = response;
        this.bookPaginationSubject.next(this.bookPagination);
      });
  }

  obtenerActualListener() {
    return this.bookPaginationSubject.asObservable();
  }

  guarLibro(book: Books) {
    this.booksLista.push(book);
    this.bookSubject.next(book);
  }
}
