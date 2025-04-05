import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalWords'
})
export class CapitalWordsPipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split(/[\s,;\n]+/)
      .filter(word => /^[A-Z][a-zA-Z]*$/.test(word))
      .join(' ');
  }

}
