import * as singleSpa from 'single-spa';

/* The loading function is a function that returns a promise that resolves with the javascript application module.
 * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.
 * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.
 */
const loadingFunction = () => import('./main-index');

/* Single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you'd like.
 * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.
 */

singleSpa.registerApplication('main-app', loadingFunction, () => true);
// singleSpa.registerApplication('sub-app-angular', () => import('./sub-app-angular/src/app/sub-app-angular.app'), () => location.pathname === "/angular");
let loadReactApp = async () => {
    const script = await import('./sub-app-react16/build/static/js/main');
    return window.reactApp;
};
singleSpa.registerApplication('react-app', loadReactApp, () => location.pathname === "/react");
singleSpa.start();