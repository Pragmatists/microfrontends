import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js';
import 'reflect-metadata';
import singleSpaAngular2 from 'single-spa-angular2';


// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// const ng2Lifecycles = singleSpaAngular2({
//   domElementGetter,
//   mainModule: AppModule,
//   angularPlatform: platformBrowserDynamic(),
//   template: `<app-root />`,
// });
//
// export const bootstrap = [
//   ng2Lifecycles.bootstrap,
// ];
//
// export const mount = [
//   ng2Lifecycles.mount,
// ];
//
// export const unmount = [
//   ng2Lifecycles.unmount,
// ];
//
// function domElementGetter() {
//   return document.getElementById('sub-app-angular');
// }
