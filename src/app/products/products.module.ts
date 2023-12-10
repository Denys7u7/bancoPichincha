import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './components/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';

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
  providers: [ProductService],
})
export class ProductsModule {}
