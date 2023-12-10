import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export class DataService<T> {
  constructor(private _httpClient: HttpClient, private url: string) {}

  get(): Observable<T[]> {
    return this._httpClient
      .get<T[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  post(resource: T): Observable<T> {
    return this._httpClient
      .post<T>(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  put(resource: T): Observable<T> {
    return this._httpClient
      .put<T>(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: string) {
    return this._httpClient
      .delete(`${this.url}?id=${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) return throwError(() => new Error('Not found'));
    if (error.status === 400) return throwError(() => new Error('Bad request'));
    return throwError(() => new Error('Sucedio un problema'));
  }
}
