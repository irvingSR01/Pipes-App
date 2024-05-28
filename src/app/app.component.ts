import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { MenuComponent } from './shared/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configuracion del locale de la app
// import localeEsMX from '@angular/common/locales/es-MX'
// import localeFrCA from '@angular/common/locales/fr-CA'

// import { registerLocaleData } from '@angular/common'

// registerLocaleData(localeEsMX);
// registerLocaleData(localeFrCA);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipesApp';
  items: MenuItem[] = [];
}
