import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../../constants/error-messages.consts';

@Pipe({
  name: 'getErrorMessage',
  standalone: true,
})

// pipe в котором приходят ошибки, в константу записывается первая из них
//  и если ошибка есть тогда возвращается значение в объекте этой ошибки
export class GetErrorMessagePipe implements PipeTransform {
  transform(errors: ValidationErrors): string {
    const error = Object.keys(errors)[0] || null;
    return error ? ERROR_MESSAGES[error as string] : '';
  }
}
