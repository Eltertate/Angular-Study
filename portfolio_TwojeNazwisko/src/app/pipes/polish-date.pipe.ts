import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj',
  'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik',
  'listopad', 'grudzień'];

@Pipe({
  name: 'polishDate'
})
export class PolishDatePipe implements PipeTransform {
  transform(value: any): string {
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      console.error('Invalid date:', value);
      return 'Nieprawidłowa data';
    }

    const monthNumber = date.getMonth();
    const month = MONTHS[monthNumber];

    return `${date.getDate()} ${month} ${date.getFullYear()}`;
  }
}
