import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickCounterService {

  private clicks = 0;
  increment(){
    this.clicks++
  }
  getValue(){
    return this.clicks;
  }
}
