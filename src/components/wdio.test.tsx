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
    browser = await webdriverio.remote({
        capabilities: {
            browserName: process.env.BROWSER_NAME || "chrome",
        },
    });
});

afterEach(async () => {
    await browser.deleteSession();
});

describe("WDIO", () => {
    it("Should looks good", async () => {
        await browser.url("about:blank");
        const app = htmlForScreenshot(mount(<App/>).html());
        await browser.setWindowSize(375, 675);
        await browser.execute((html: string) => {
            const HTMLElement = document.querySelector("html");
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
