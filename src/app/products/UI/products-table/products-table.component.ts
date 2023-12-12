import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductDTO } from '../../infraestructure/dto/produdct.dto';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  dialogActions!: HTMLDialogElement;
  dialogInformation!: HTMLDialogElement;
  dataSource: ProductDTO[] = [];
  maxRows = 5;
  canContinue = false;
  canBack = false;
  productGlobal: ProductDTO = {
    id: '',
    name: '',
    logo: '',
    date_release: new Date(),
    date_revision: new Date(),
    description: '',
  };
  isDelete = false;
  dialogInformationMsg = '';
  dialogInformationIcon = '';

  constructor(
    public _productService: ProductRepository,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.dialogActions = document.getElementById('dialog') as HTMLDialogElement;
    this.dialogInformation = document.getElementById(
      'information'
    ) as HTMLDialogElement;
    this.loadTable();
  }

  loadTable(): void {
    this._productService.dataTable
      .pipe(map((data) => data.slice(0, this.maxRows)))
      .subscribe({
        next: (data) => (this.dataSource = data),
      });
  }

  getProducts(): void {
    this._productService.isLoading.next(true);
    this._productService.getAll().subscribe({
      next: (data: ProductDTO[]) => this._productService.dataTable.next(data),
      complete: () => this._productService.isLoading.next(false),
    });
  }

  changeMaxRows() {
    this.loadTable();
  }

  showModal(product: ProductDTO, isDelete: boolean) {
    this.productGlobal = product;
    this.isDelete = isDelete;
    this.dialogActions.showModal();
  }

  delete(): void {
    this._productService.isLoading.next(true);
    this._productService.delete(this.productGlobal.id).subscribe({
      next: () => {
        this.showDialogInformation(
          '¡El producto se ha eliminado correctamente!',
          'delete_forever'
        );
      },
      complete: () => {
        this._productService.isLoading.next(false);
        this.getProducts();
      },
    });
  }

  showDialogInformation(msg: string, icon: string): void {
    this.dialogInformationMsg = msg;
    this.dialogInformationIcon = icon;
    this.dialogInformation.showModal();
  }

  update(): void {
    this._router.navigate([`products/create/true`], {
      queryParams: this.productGlobal,
    });
  }
}
