import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import localeEsMX from '@angular/common/locales/es-MX'
import localeFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common'
import { provideAnimations } from '@angular/platform-browser/animations';

registerLocaleData(localeEsMX);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'es-MX' },
    // { provide: LOCALE_ID, useValue: 'fr-CA' },
  ]
};
