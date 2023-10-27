import 'zone.js/dist/zone'; // Add this line to import zone.js

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Your app module path

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
