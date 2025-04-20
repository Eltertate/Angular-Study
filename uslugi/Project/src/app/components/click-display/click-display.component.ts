import { Component } from '@angular/core';
import { ClickCounterService } from '../../services/click-counter.service';

@Component({
  selector: 'app-click-display',
  imports: [],
  template: `
    <p>Liczba kliknięć: {{ getClicks() }}</p>
    <button (click) = "refresh()">Odśwież</button>
  `
})
export class ClickDisplayComponent {
  constructor(private counterService: ClickCounterService){}

  getClicks(): number{
    return this.counterService.getValue()
  }

  refresh(){
    
  }
}
