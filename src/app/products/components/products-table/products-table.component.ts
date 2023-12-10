import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  myDialog!: HTMLDialogElement;
  dataSource: Product[] = [];
  maxRows = 5;
  canContinue = false;
  canBack = false;
  productGlobal: Product = {
    id: '',
    name: '',
    logo: '',
    date_release: new Date(),
    date_revision: new Date(),
    description: '',
  };
  isDelete = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.myDialog = document.getElementById('dialog') as HTMLDialogElement;
    this.loadTable();
  }

  loadTable(): void {
    this._productService.dataTable
      .pipe(map((data) => data.slice(0, this.maxRows)))
      .subscribe((data) => (this.dataSource = data));
  }

  getProducts(): void {
    alert('GET PRODUCTS');
    this._productService.get().subscribe({
      next: (data: Product[]) => this._productService.dataTable.next(data),
    });
  }

  changeMaxRows() {
    this.loadTable();
  }

  showModal(product: Product, isDelete: boolean) {
    this.productGlobal = product;
    this.isDelete = isDelete;
    this.myDialog.showModal();
  }

  delete(): void {
    this._productService.delete(this.productGlobal.id).subscribe({
      next: (response) => console.log(response),
      complete: () => {
        this.getProducts();
      },
    });
  }
}
