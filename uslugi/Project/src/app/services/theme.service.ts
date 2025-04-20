import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('light'); 
  currentTheme = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme(); 
  }

  toggleTheme(): void {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.themeSubject.next(newTheme);
    this.updateBodyClass(newTheme);
  }

  private updateBodyClass(theme: string): void {
    const body = document.body;
    if (theme === 'dark') {
      body.style.backgroundColor = '#333'; 
      body.style.color = '#fff'; 
    } else {
      body.style.backgroundColor = '#fff'; 
      body.style.color = '#000'; 
    }
  }

  private loadTheme(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.themeSubject.next(savedTheme);
        this.updateBodyClass(savedTheme);
      }
    }
  }

  setTheme(theme: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme);
      this.themeSubject.next(theme);
      this.updateBodyClass(theme);
    }
  }
}