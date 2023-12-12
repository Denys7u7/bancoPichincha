import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { MockProductRespository } from '../../utils/mocks/mockProductRepository';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRespository,
        },
      ],
      declarations: [ProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search products', () => {
    const eventWithValue = { target: { value: 'TEST' } } as unknown as Event;
    const eventWithValueEmpty = { target: { value: '' } } as unknown as Event;
    component.search(eventWithValue);
    component.search(eventWithValueEmpty);
  });
});
