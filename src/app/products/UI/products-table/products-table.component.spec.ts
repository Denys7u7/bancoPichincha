import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableComponent } from './products-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { MockProductRespository } from '../../utils/mocks/mockProductRepository';
import { getProducts } from '../../utils/mocks/mockProduct';
import { Router } from '@angular/router';
import { mockRouter } from '../../utils/mocks/mockRouter';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRespository,
        },
        {
          provide: Router,
          useClass: mockRouter,
        },
      ],
      declarations: [ProductsTableComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.getProducts();
    component.changeMaxRows();
  });

  it('showModal(): isDelete should change to true', () => {
    let product = getProducts(1)[0];
    component.showModal(product, true);
    expect(component.productGlobal).toBe(product);
    expect(component.isDelete).toBeTrue();
  });

  it('showDialogInformation(): should set data global for the dialog', () => {
    component.showDialogInformation('msg test', 'test');
    expect(component.dialogInformationMsg).toBe('msg test');
    expect(component.dialogInformationIcon).toBe('test');
  });

  it('delete(): should set the data to "successful deletion"', () => {
    component.delete();
    expect(component.dialogInformationMsg).toBe(
      '¡El producto se ha eliminado correctamente!'
    );
    expect(component.dialogInformationIcon).toBe('delete_forever');
    component.update();
  });
});
