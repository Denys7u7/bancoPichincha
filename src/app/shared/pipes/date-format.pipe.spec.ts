import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  const pipe = new DateFormatPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Shoul convert date', () => {
    expect(pipe.transform(new Date())).toBeTruthy();
  });
});
