import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    const dateInArray = value.toString().split('T')[0].split('-');
    return `${dateInArray[2]}/${dateInArray[1]}/${dateInArray[0]}`;
  }
}
