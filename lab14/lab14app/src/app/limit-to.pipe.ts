import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, limit: number, begin: number = 0): any {
    if(typeof value === 'string'){
      return value.slice(begin, begin+limit);
    }
    else if(Array.isArray(value)){
      return value.slice(begin, begin+limit);
    }
    return value;
  }

}
