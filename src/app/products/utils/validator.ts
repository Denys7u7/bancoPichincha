import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateDate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const inputDate = new Date(control.value);
    const currentDate = new Date();

    if (inputDate >= currentDate) {
      return null; // La fecha es válida
    } else {
      return { invalidDate: true }; // La fecha no es válida
    }
  };
}
