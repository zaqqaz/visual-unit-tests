import puppeteer from "puppeteer";
import path from "path";
import mkdirp from "mkdirp";
import fs from "fs";

export async function getBrowser() {
    const browser = await puppeteer.connect({
        browserWSEndpoint: process.env.__BROWSER_wsEndpoint__,
    });

    return browser;
}

export interface TakeScreenshotProps {
    html: string;
    pageWidth?: number;
    pageHeight?: number;
    selector?: string;
    withHtml?: boolean;
}

export async function takeScreenshot(props: TakeScreenshotProps) {
    const {
        html,
        pageWidth = 800,
        pageHeight = 600,
        selector = "body",
        withHtml = false,
    } = props;

    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: pageWidth, height: pageHeight });
    const contentForScreenshot = htmlForScreenshot(html);
    await page.setContent(contentForScreenshot);
    const elementHandle = await page.$(selector);

    if (withHtml) {
        // Avoid unhelpful errors `cannot read screenshot() of null`
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

export function htmlForScreenshot(body: any) {
    return `
        <html>
        <head>
            <style>${process.env.globalCss}</style>
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
                * {
                    padding: 0;
                    margin: 0;
                }
                body, html {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            </style>
        </head>
        <body>
            ${body}
        </body>
        </html>
    `;
}
