import React from "react";
import * as webdriverio from "webdriverio";
import App from "./App";
import { htmlForScreenshot } from "../utils/testUtils";
import ReactDOMServer from "react-dom/server";

let browser: any;
beforeAll(async () => {
    const capabilities = {
        'os_version': '11.3', // will not work, but for 'os_version' : '12', 'device' : 'iPhone XS', everything is fine
        'device': 'iPhone 8 Plus',
        'real_mobile': 'true',
        'browserstack.local': 'false',
        // 'browserstack.appium_version': '1.9.1',
        'browserstack.video': 'false',
    } as any;

    browser = await webdriverio.remote({
        user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
        key: process.env.BROWSERSTACK_KEY || 'BROWSERSTACK_KEY',
        hostname: "hub.browserstack.com",
        capabilities: capabilities,
        logLevel: 'error',
    });
});

afterAll(async () => {
    await browser.deleteSession();
});

describe("WDIO", () => {
    it("Should looks good in safari", async () => {
        await browser.url("about:blank");
        const app = htmlForScreenshot(ReactDOMServer.renderToStaticMarkup(<App/>));

        // Execute will not work for 'os_version': '11.3', 'device': 'iPhone 8 Plus',
        // But will work for 'os_version' : '12', 'device' : 'iPhone XS',
        // Looks like related to: https://github.com/webdriverio/webdriverio/issues/3264
        // but with 'browserstack.appium_version': '1.9.1' we have issue:
        // Appium error: An unknown server-side error occurred while processing the command. Original error: Did not get any response after 180s
        await browser.execute(function (html: string) {
            // es5! as will be executed in browser context
            var HTMLElement = document.querySelector("html");
            if (HTMLElement) {
                HTMLElement.innerHTML = html;
            }
        }, app);

        const screenShot = await browser.takeScreenshot();

        // Needed to convert to correct buffer;
        const str = screenShot.toString('base64');
        const image = Buffer.from(str, 'base64');

        expect(image).toMatchImageSnapshot();
    })
});
