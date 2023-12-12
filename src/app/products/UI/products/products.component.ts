import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { ProductDTO } from '../../infraestructure/dto/produdct.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: ProductDTO[] = [];

  constructor(private _productService: ProductRepository) {}

  ngOnInit(): void {
    this.getProducts();
  }

  search(event: Event): void {
    console.log(event, typeof event)
    let searchValue = (event.target as HTMLInputElement).value;
    if (searchValue != '') {
      this._productService.dataTable.next(
        this.products.filter((p) => p.id === searchValue)
      );
    } else {
      this.getProducts();
    }
  }

  getProducts(): void {
    this._productService.isLoading.next(true);
    this._productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this._productService.dataTable.next(data);
      },
      complete: () => this._productService.isLoading.next(false),
    });
  }
}
