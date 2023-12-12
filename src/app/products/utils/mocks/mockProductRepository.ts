import { BehaviorSubject, of } from 'rxjs';
import { Product } from '../../domain/models/product/product';
import { getProducts } from './mockProduct';

export class MockProductRespository {
  /* Imitating ProductRespository */
  dataTable = new BehaviorSubject<Product[]>([]);
  isLoading = new BehaviorSubject<boolean>(false);
  getAll = () => of(getProducts(10));
  save = (product: Product) => of(product);
  update = (product: Product) => of(product);
  delete = (id: string) => of(id);
  verification = (id: string) => of(id === 'TEST');
}
