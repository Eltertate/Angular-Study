import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-status',
  template: `
    <p>Aktualny motyw: <strong>{{ theme }}</strong></p>
  `
})
export class ThemeStatusComponent implements OnInit {
  theme: string = 'light';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe(theme => {
      this.theme = theme;
    });
  }
}
