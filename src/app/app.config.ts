import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { providePrimeNG } from 'primeng/config';
import { enUsLocale } from './config/localizacao';
import { MyPreset } from './config/tema';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(ptBr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    providePrimeNG({
      theme: {
        preset: MyPreset,
      },
      translation: enUsLocale,
    })
  ]
};
