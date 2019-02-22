import React from "react";
import * as selenium from "selenium-standalone";
import * as webdriverio from "webdriverio";
import App from "./App";
import { htmlForScreenshot } from "../utils/testUtils";
import { mount } from "enzyme";

let seleniumProcess: any;
let browser: any;

beforeAll(async () => {
    await new Promise(resolve => {
        selenium.install(resolve);
    });
    seleniumProcess = await new Promise((resolve, reject) =>
        selenium.start((error, childProcess) => {
            if (error) {
                reject(error);
            } else {
                resolve(childProcess);
            }
        })
    );
});

afterAll(async () => {
    await seleniumProcess.kill();
});

beforeEach(async () => {
    const capabilities = {
        'os': 'OS X',
        'os_version': 'Mojave',
        'browserName': 'Safari',
        'browser_version': '12.0',
        'browserstack.local': 'false',
        'browserstack.video': 'false',
    };

    browser = await webdriverio.remote({
        user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
        key: process.env.BROWSERSTACK_KEY || 'BROWSERSTACK_KEY',
        hostname: "hub.browserstack.com",
        capabilities: capabilities,
    });
});

afterEach(async () => {
    await browser.deleteSession();
});

describe("WDIO", () => {
    it("Should looks good in safari", async () => {
        await browser.url("about:blank");
        const app = htmlForScreenshot(mount(<App/>).html());

        // await browser.setWindowSize(375, 675); --- for chrome
        await browser.setWindowRect(null, null, 375, 675);

        await browser.execute(function (html: string) {
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
