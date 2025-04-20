import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">
      Zmień motyw
    </button>
  `
})
export class ThemeToggleComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}