// src/app/services/timer.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private stopTimer$ = new Subject<void>(); 
  private startTimer$ = new Subject<void>(); 

  constructor() {}

  getTimer(): Observable<number> {
    return this.startTimer$.pipe(
      startWith(0),
      switchMap(() => {
        let counter = 0;
        return new Observable<number>(observer => {
          const intervalId = setInterval(() => {
            counter++;
            observer.next(counter);
          }, 1000);

          return () => clearInterval(intervalId);
        }).pipe(takeUntil(this.stopTimer$));
      })
    );
  }

  resetTimer() {
    this.stopTimer$.next(); 
    this.stopTimer$.complete(); 
    this.stopTimer$ = new Subject<void>(); 
    this.startTimer$.next();
  }
}
