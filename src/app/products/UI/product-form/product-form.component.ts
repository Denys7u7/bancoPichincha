import { ProductValidators } from './../../utils/validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDTO } from '../../infraestructure/dto/produdct.dto';
import { ProductRepository } from '../../domain/models/product/repositories/product.repository';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  dialogInformation!: HTMLDialogElement;
  dialogInformationMsg = '';
  dialogInformationIcon = '';
  form!: FormGroup;
  today = Date.now();
  isEdit = false;

  constructor(
    private _productService: ProductRepository,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
        [ProductValidators.IdValidator(this._productService)]
      ),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      logo: new FormControl('', [Validators.required]),
      date_release: new FormControl('', [
        Validators.required,
        ProductValidators.validateDate(),
      ]),
      date_revision: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
    });

    this.dialogInformation = document.getElementById(
      'information'
    ) as HTMLDialogElement;

    combineLatest([
      this._activatedRoute.params,
      this._activatedRoute.queryParams,
    ]).subscribe({
      next: ([params, queryParams]) => {
        if (params['isEdit'] === 'true') {
          this.isEdit = true;
          this.form.get('id')?.setValue(queryParams['id']);
          this.form.get('id')?.disable();
          this.form.get('name')?.setValue(queryParams['name']);
          this.form.get('description')?.setValue(queryParams['description']);
          this.form.get('logo')?.setValue(queryParams['logo']);
          this.form
            .get('date_release')
            ?.setValue(queryParams['date_release'].split('T')[0]);
          this.form
            .get('date_revision')
            ?.setValue(queryParams['date_revision'].split('T')[0]);
        }
      },
    });

    this.form.get('date_release')?.valueChanges.subscribe((value: string) => {
      if (value) {
        const dateParts = value.split('-');
        this.form
          .get('date_revision')
          ?.setValue(
            `${parseInt(dateParts[0]) + 1}-${dateParts[1]}-${dateParts[2]}`
          );
      }
    });
  }

  reset(): void {
    this.form.reset();
    this.form.get('id')?.enable();
    this.isEdit = false;
  }

  send(): void {
    if (this.isEdit) {
      this._productService.isLoading.next(true);
      this._productService
        .update(this.form.getRawValue() as ProductDTO)
        .subscribe({
          next: (data) => {
            this.showDialogInformation(
              'El producto se ha actualizado exitosamente',
              'update'
            );
            this.reset();
          },
          complete: () => this._productService.isLoading.next(false),
        });
    } else {
      this._productService.isLoading.next(true);
      this._productService
        .save(this.form.getRawValue() as ProductDTO)
        .subscribe({
          next: (data) => {
            this.showDialogInformation(
              'El producto se ha guardado exitosamente',
              'save'
            );
            this.reset();
          },
          complete: () => this._productService.isLoading.next(false),
        });
    }
  }

  showDialogInformation(msg: string, icon: string): void {
    this.dialogInformationMsg = msg;
    this.dialogInformationIcon = icon;
    this.dialogInformation.showModal();
  }
}
