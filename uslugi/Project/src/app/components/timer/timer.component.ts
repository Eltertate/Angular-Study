import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `
    <div>
      <h1>Czas upływający: {{ time }} sekund</h1>
      <button (click)="resetTimer()">Resetuj Timer</button>
    </div>
  `
})
export class TimerComponent implements OnInit, OnDestroy {
  time = 0; 
  private timerSubscription: Subscription | null = null;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerSubscription = this.timerService.getTimer().subscribe(seconds => {
      this.time = seconds;
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  resetTimer() {
    this.timerService.resetTimer();
  }
}