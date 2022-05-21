import puppeteer from "puppeteer";
import path from "path";
import mkdirp from "mkdirp";
import fs from "fs";
import { globalCss } from "./../components/GlobalStyle";

export async function getBrowser() {
    const browser = await puppeteer.connect({
        browserWSEndpoint: process.env.__BROWSER_wsEndpoint__,
    });

    return browser;
}

export interface TakeScreenshotProps {
    html?: string;
    pageWidth?: number;
    pageHeight?: number;
    selector?: string;
    withHtml?: boolean;
}

export async function takeScreenshot(props: TakeScreenshotProps = {}) {
    const {
        html,
        pageWidth = 800,
        pageHeight = 600,
        selector = "body > div",
        withHtml = false,
    } = props;

    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: pageWidth, height: pageHeight });
    const contentForScreenshot = htmlForScreenshot(html || document.body.parentElement?.outerHTML!);
    await page.setContent(contentForScreenshot);
    const elementHandle = await page.$(selector);

    if (withHtml) {
        const dirname = path.resolve("__image_snapshots__/local/debug");
        const filename = path.join(dirname, Date.now() + ".html");
        mkdirp.sync(dirname);
        fs.writeFileSync(filename, contentForScreenshot);

    }
    if (elementHandle) {
        const screenShot = await elementHandle.screenshot();
        await page.close();

        return screenShot;
    }

    await page.close();
}

export function htmlForScreenshot(body: string) {
    return `
        <html>
            <style>
                *,
                *::after,
                *::before {
                    transition-delay: 0s !important;
                    transition-duration: 0s !important;
                    animation-delay: -0.0001s !important;
                    animation-duration: 0s !important;
                    animation-play-state: paused !important;
                    caret-color: transparent !important;
                }
                {globalCss}
            </style>
            ${body}
        </html>
    `;
}
