import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import appModule from './app.module';

const ng2Lifecycles = singleSpaAngular2({
  domElementGetter,
  mainModule: appModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<app-root />`,
});

export const bootstrap = [
  ng2Lifecycles.bootstrap,
];

export const mount = [
  ng2Lifecycles.mount,
];

export const unmount = [
  ng2Lifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById('sub-app-angular');
}
