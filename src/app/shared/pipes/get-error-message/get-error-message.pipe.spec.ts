import { ValidationErrors } from '@angular/forms';
import { GetErrorMessagePipe } from './get-error-message.pipe';

describe('GetErrorMessagePipe', () => {
  let getErrorMsg: GetErrorMessagePipe;

  beforeEach(() => {
    getErrorMsg = new GetErrorMessagePipe();
  });

  it('should return error if it exists', () => {
    const validationErrors = {
      required: true,
    };
    expect(getErrorMsg.transform(validationErrors)).toBe(
      'COMMON.VALIDATION_MESSAGES.REQUIRED',
    );
  });

  it('should return empty string if error does not exist', () => {
    const validationErrors: ValidationErrors = {};
    expect(getErrorMsg.transform(validationErrors)).toBe('');
  });
});
