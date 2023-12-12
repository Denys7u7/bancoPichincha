import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MockProductRespository } from '../../utils/mocks/mockProductRepository';
import { of } from 'rxjs';

class MockActivatedRoute {
  params = of({
    isEdit: 'true',
  });
  queryParams = of({
    id: 'TEST',
    name: 'Card Test',
    description: 'Generic description',
    logo: 'logo.jpg',
    date_release: '2023-02-01',
    date_revision: '2024-02-01',
  });
}

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRespository,
        },
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute,
        },
      ],
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ProductFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 year to the date', () => {
    component.form.get('date_release')?.setValue('2024-02-04');
    expect(component.form.get('date_revision')?.value).toBe('2025-02-04');
  });

  it('reset(): should reset data', () => {
    component.reset();
    expect(component.form.get('id')?.enabled).toBeTrue();
    expect(component.isEdit).toBeFalse();
  });

  it('send(): should show save successully popup', () => {
    component.send();
    component.isEdit = false;
    component.send();
  });

  it('showDialogInformation(): should set data global for the dialog', () => {
    component.showDialogInformation('msg test', 'test');
    expect(component.dialogInformationMsg).toBe('msg test');
    expect(component.dialogInformationIcon).toBe('test');
  });
});
