import { TestBed } from '@angular/core/testing';

import { ProductRepositoryImpl } from './product.repository.impl';
import { ProductApiService } from '../driven-adapter/product-api/product-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProductApiService } from '../../utils/mocks/mockProductApiService';
import { getProducts } from '../../utils/mocks/mockProduct';

describe('ProductRepositoryImplService', () => {
  let service: ProductRepositoryImpl;
  const product = getProducts(1)[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductRepositoryImpl,
        {
          provide: ProductApiService,
          useClass: MockProductApiService,
        },
      ],
    });
    service = TestBed.inject(ProductRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll(): should return a product array', (done: DoneFn) => {
    service.getAll().subscribe({
      next: (data) => {
        expect(data.length).toBe(10);
        done();
      },
    });
  });

  it('save(): should return one product', (done: DoneFn) => {
    service.save(product).subscribe({
      next: (data) => {
        expect(data.id).toBe('TEST1');
        done();
      },
    });
  });

  it('update(): should return one product', (done: DoneFn) => {
    service.update(product).subscribe({
      next: (data) => {
        expect(data.id).toBe('TEST1');
        done();
      },
    });
  });

  it('delete(): should return a string', (done: DoneFn) => {
    service.delete('TEST').subscribe({
      next: (data) => {
        expect(typeof data).toBe('string');
        done();
      },
    });
  });

  it('verification(): should return a boolean', (done: DoneFn) => {
    service.verification('TEST').subscribe({
      next: (data) => {
        expect(data).toBeTrue();
        done();
      },
    });
  });
});
