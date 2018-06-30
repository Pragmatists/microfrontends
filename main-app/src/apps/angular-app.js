import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadAngularApp = async () => {
    await runScript('http://localhost:3001/inline.bundle.js');
    await runScript('http://localhost:3001/polyfills.bundle.js');
    await runScript('http://localhost:3001/styles.bundle.js');
    await runScript('http://localhost:3001/vendor.bundle.js');
    await runScript('http://localhost:3001/main.bundle.js');
    return window.angularApp;
};


export const registerAngularApp = () => {
    singleSpa.registerApplication('angular-app', loadAngularApp, matchingPathname(['/angular', '/']));
};

