import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate',
  standalone: true,
})
export class ToDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    if (value instanceof Date) {
      return value.toLocaleDateString();
    }
    return value;
  }
}
