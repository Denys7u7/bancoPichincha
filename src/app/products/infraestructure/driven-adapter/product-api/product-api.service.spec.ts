import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { getProducts } from 'src/app/products/utils/mocks/mockProduct';
import { of, throwError } from 'rxjs';

describe('ProductApiService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ProductApiService;
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });
  const products = getProducts(5);

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
    service = new ProductApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll(): should return a products array', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(products));
    service.getAll().subscribe({
      next: (data) => {
        expect(data.length).toBe(5);
        done();
      },
    });
  });

  it('getAll(): should return a error', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(() => errorResponse));
    service.getAll().subscribe({
      next: (data) => {
        done.fail('expected an error');
      },
      error: (error) => {
        expect(error).toBeUndefined();
        done();
      },
    });
  });

  it('verification(): should return boolean', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(true));
    service.verification('TEST').subscribe({
      next: (data) => {
        expect(data).toBeTrue();
        done();
      },
    });
  });

  it('verification(): should return error', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(() => errorResponse));
    service.verification('TEST').subscribe({
      next: (data) => {
        done.fail('expected an error');
      },
      error: (error) => {
        expect(error).toBeUndefined();
        done();
      },
    });
  });

  it('save(): should return a product', (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(of(products[0]));
    service.save(products[0]).subscribe({
      next: (data) => {
        expect(data).toBeTruthy();
        done();
      },
    });
  });

  it('save(): should return a error', (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(throwError(() => errorResponse));
    service.save(products[0]).subscribe({
      next: (data) => {
        done.fail('expected an error');
      },
      error: (error) => {
        expect(error).toBeUndefined();
        done();
      },
    });
  });

  it('update(): should return a product', (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(of(products[0]));
    service.update(products[0]).subscribe({
      next: (data) => {
        expect(data).toBeTruthy();
        done();
      },
    });
  });

  it('update(): should return a product', (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(throwError(() => errorResponse));
    service.update(products[0]).subscribe({
      next: (data) => {
        done.fail('expected an error');
      },
      error: (error) => {
        expect(error).toBeUndefined();
        done();
      },
    });
  });

  it('delete(): should return a string', (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(of('Product deleted successfully'));
    service.delete('TEST').subscribe({
      next: (data) => {
        expect(data).toBe('Product deleted successfully');
        done();
      },
    });
  });

  it('delete(): should return a string', (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(throwError(() => errorResponse));
    service.delete('TEST').subscribe({
      next: (data) => {
        done.fail('expected an error');
      },
      error: (error) => {
        expect(error).toBeUndefined();
        done();
      },
    });
  });
});
