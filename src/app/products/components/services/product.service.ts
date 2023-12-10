import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleError } from '../../utils/products.handler';
import { ActionProducts } from '../../utils/actions-products.enum';

@Injectable()
export class ProductService {
  dataTable = new BehaviorSubject<Product[]>([]);
  url = environment.urlProduct;

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<Product[]> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .get<Product[]>(this.url, { headers })
      .pipe(catchError((error) => handleError(error, ActionProducts.GET)));
  }

  post(object: Product): Observable<Product[]> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .post<Product[]>(this.url, object, { headers })
      .pipe(catchError((error) => handleError(error, ActionProducts.POST)));
  }

  put(object: Product): Observable<Product[]> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .put<Product[]>(this.url, object, { headers })
      .pipe(catchError((error) => handleError(error, ActionProducts.PUT)));
  }

  delete(id: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('authorId', '3')
      .set('Content-Type', 'text/plain; charset=utf-8');
    return this._httpClient
      .delete(this.url + '?id=' + id, {
        headers,
        responseType: 'text',
      })
      .pipe(catchError((error) => handleError(error, ActionProducts.DELETE)));
  }

  verification(id: string): Observable<boolean> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .get<boolean>(this.url + '/verification?id=' + id, {
        headers,
      })
      .pipe(
        catchError((error) => handleError(error, ActionProducts.VERIFICATION))
      );
  }

  search(value: string): void {
    let products: Product[] = [];
    this.dataTable.subscribe({
      next: (data) => (products = data),
    });
    this.verification(value).subscribe((data) =>
      data
        ? this.dataTable.next([
            products.find((product) => product.id === value)!,
          ])
        : console.log('El id no existe')
    );
  }
}
