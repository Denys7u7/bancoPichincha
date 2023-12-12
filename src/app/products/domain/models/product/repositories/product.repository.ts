import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product';

export abstract class ProductRepository {
  abstract dataTable: BehaviorSubject<Product[]>;
  abstract isLoading: BehaviorSubject<boolean>;
  abstract getAll(): Observable<Product[]>;
  abstract save(product: Product): Observable<Product>;
  abstract update(product: Product): Observable<Product>;
  abstract delete(id: string): Observable<string>;
  abstract verification(id: string): Observable<boolean>;
}
