import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickDisplayComponent } from './components/click-display/click-display.component';
import { ClickIncrementerComponent } from './components/click-incrementer/click-incrementer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserLoggerComponent } from './components/user-logger/user-logger.component';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ThemeStatusComponent } from './components/theme-status/theme-status.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  imports: [ClickIncrementerComponent,
    ClickDisplayComponent, UserLoggerComponent,ThemeToggleComponent,
    ThemeStatusComponent, FormsModule,TimerComponent],
  providers: [TimerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
