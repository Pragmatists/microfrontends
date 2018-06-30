import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadReactApp = async () => {
    await runScript('http://localhost:3002/static/js/main.js');
    return window.reactApp;
};


export const registerReactApp = () => {
    singleSpa.registerApplication('react-app', loadReactApp, matchingPathname(['/react', '/']));
};