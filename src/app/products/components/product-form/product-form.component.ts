import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { validateDate } from '../../utils/validator';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  today = Date.now();

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
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
      date_release: new FormControl('', [Validators.required, validateDate()]),
      date_revision: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
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
  }

  send(): void {
    this._productService.post(this.form.getRawValue() as Product).subscribe({
      next: (data) => {
        console.log(data);
        this.reset();
      },
    });
  }
}
