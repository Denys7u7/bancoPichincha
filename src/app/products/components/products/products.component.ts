import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  search(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    searchValue === ''
      ? this.getProducts()
      : this._productService.search(searchValue);
  }

  getProducts(): void {
    this._productService.get().subscribe({
      next: (data: Product[]) => this._productService.dataTable.next(data),
    });
  }
}
