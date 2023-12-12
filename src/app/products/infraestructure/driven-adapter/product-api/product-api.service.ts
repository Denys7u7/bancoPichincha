import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, delay, map } from 'rxjs';
import { Product } from 'src/app/products/domain/models/product/product';
import { ActionProducts } from 'src/app/products/utils/actions-products.enum';
import { handleError } from 'src/app/products/infraestructure/helpers/handlers/products.handler';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductApiService {
  dataTable = new BehaviorSubject<Product[]>(
    []
  ); /* here will save the data for ours products table */
  isLoading = new BehaviorSubject<boolean>(
    false
  ); /* for show the skeleton loading */
  url = environment.urlProduct; /* endpoint to consume */
  DELAY_FOR_SHOW_SKELETON =
    environment.DELAY_FOR_SHOW_SKELETON; /* 200 ms of delay */

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<Product[]> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .get<Product[]>(this.url, { headers })
      .pipe(catchError((error) => handleError(error, ActionProducts.GET)))
      .pipe(delay(this.DELAY_FOR_SHOW_SKELETON));
  }

  save(product: Product): Observable<Product> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .post<Product>(this.url, product, { headers })
      .pipe(catchError((error) => handleError(error, ActionProducts.POST)))
      .pipe(delay(this.DELAY_FOR_SHOW_SKELETON));
  }

  update(product: Product): Observable<Product> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .put<Product>(this.url, product, { headers })
      .pipe(catchError((error) => handleError(error, ActionProducts.PUT)))
      .pipe(delay(this.DELAY_FOR_SHOW_SKELETON));
  }

  delete(id: string): Observable<string> {
    const headers = new HttpHeaders()
      .set('authorId', '3')
      .set('Content-Type', 'text/plain; charset=utf-8');
    return this._httpClient
      .delete(this.url + '?id=' + id, {
        headers,
        responseType: 'text',
      })
      .pipe(catchError((error) => handleError(error, ActionProducts.DELETE)))
      .pipe(delay(this.DELAY_FOR_SHOW_SKELETON));
  }

  verification(id: string): Observable<boolean> {
    const headers = new HttpHeaders().set('authorId', '3');
    return this._httpClient
      .get<boolean>(this.url + '/verification?id=' + id, {
        headers,
      })
      .pipe(
        catchError((error) => handleError(error, ActionProducts.VERIFICATION))
      )
      .pipe(delay(this.DELAY_FOR_SHOW_SKELETON));
  }
}
