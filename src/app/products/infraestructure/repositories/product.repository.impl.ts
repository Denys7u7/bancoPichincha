import { Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../domain/models/product/product';
import { ProductApiService } from '../driven-adapter/product-api/product-api.service';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(private _productApiService: ProductApiService) {}

  dataTable: BehaviorSubject<Product[]> = this._productApiService.dataTable;
  isLoading: BehaviorSubject<boolean> = this._productApiService.isLoading;

  getAll(): Observable<Product[]> {
    return this._productApiService.getAll();
  }
  save(product: Product): Observable<Product> {
    return this._productApiService.save(product);
  }
  update(product: Product): Observable<Product> {
    return this._productApiService.update(product);
  }
  delete(id: string): Observable<string> {
    return this._productApiService.delete(id);
  }
  verification(id: string): Observable<boolean> {
    return this._productApiService.verification(id);
  }
}
