import { ToDatePipe } from './to-date.pipe';

describe('ToDatePipe', () => {
  let toDatePipe: ToDatePipe = new ToDatePipe();

  beforeEach(() => {
    toDatePipe = new ToDatePipe();
  });

  it('should transform isoString to localeDateString in a table', () => {
    const date = new Date('2023-10-05T09:28:24.756Z');
    expect(toDatePipe.transform(date)).toBe('05.10.2023');
  });
});
