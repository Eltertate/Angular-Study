import { Component } from '@angular/core';
import { ClickCounterService } from '../../services/click-counter.service';

@Component({
  selector: 'app-click-incrementer',
  imports: [],
  template: ` 
    <button (click) = "handleClick()">Kliknij</button>
  `
})
export class ClickIncrementerComponent {
  constructor(private counterService: ClickCounterService){}
    handleClick(){
      this.counterService.increment();
    }
}
