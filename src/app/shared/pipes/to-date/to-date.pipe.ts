import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate',
  standalone: true,
})
export class ToDatePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return new Date(value).toLocaleDateString();
    }
    return value;
  }
}
