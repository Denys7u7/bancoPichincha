import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './UI/products-table/products-table.component';
import { ProductsComponent } from './UI/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './UI/product-form/product-form.component';
import { ProductRepositoryImpl } from './infraestructure/repositories/product.repository.impl';
import { ProductApiService } from './infraestructure/driven-adapter/product-api/product-api.service';
import { ProductRepository } from './domain/models/product/repositories/product.repository';

@NgModule({
  declarations: [
    ProductsTableComponent,
    ProductsComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    { provide: ProductRepository, useClass: ProductRepositoryImpl },
    ProductApiService,
  ],
})
export class ProductsModule {}
