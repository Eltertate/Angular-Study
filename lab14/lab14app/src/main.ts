// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';         // ✅
import localePl from '@angular/common/locales/pl';            // ✅
import { LOCALE_ID } from '@angular/core';                    // ✅

registerLocaleData(localePl);

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pl' }                   // встановлюємо польську локаль
  ]
});