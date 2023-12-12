import {
  AbstractControl,
  AsyncValidatorFn,
  ValidatorFn,
} from '@angular/forms';
import { ProductRepository } from '../domain/models/product/repositories/product.repository';
import { map } from 'rxjs';

export class ProductValidators {
  static validateDate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const inputDate = new Date(control.value);
      const currentDate = new Date();

      return inputDate >= currentDate ? null : { invalidDate: true };
    };
  }

  static IdValidator(_productRepository: ProductRepository): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return _productRepository.verification(control.value).pipe(
        map((result: boolean) => {
          return result ? { IdAlreadyExists: true } : null;
        })
      );
    };
  }
}
