import * as singleSpa from 'single-spa';

/* The loading function is a function that returns a promise that resolves with the javascript application module.
 * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.
 * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.
 */
const loadingFunction = () => import('./main-index');

/* Single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you'd like.
 * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.
 */

const loadApp = async (bundleAddress) => {
    const response = await fetch(bundleAddress)
    let text = await response.text();
    await eval(text);
};

singleSpa.registerApplication('main-app', loadingFunction, () => true);
let loadReactApp = async () => {
    await loadApp('http://localhost:3002/static/js/main.js');
    return window.reactApp;
};
singleSpa.registerApplication('react-app', loadReactApp, () => global.location.pathname === "/react" || global.location.pathname === "/");

let loadAngularApp = async () => {
    await loadApp('http://localhost:3001/inline.bundle.js');
    await loadApp('http://localhost:3001/polyfills.bundle.js');
    await loadApp('http://localhost:3001/styles.bundle.js');
    await loadApp('http://localhost:3001/vendor.bundle.js');
    await loadApp('http://localhost:3001/main.bundle.js');
    return window.angularApp;
};
singleSpa.registerApplication('angular-app', loadAngularApp, () => global.location.pathname === "/angular" || global.location.pathname === "/");

singleSpa.start();