import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfSentences'
})
export class NumberOfSentencesPipe implements PipeTransform {

  transform(value: string, substring: string): number {
    if (!value || !substring) return 0;
    
    let count = 0;
    let position = 0;

    while (true) {
      position = value.indexOf(substring, position);
      if (position === -1) break;
      count++;
      position += substring.length;
    }

    return count;
  }
}
