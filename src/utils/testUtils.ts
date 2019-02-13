import puppeteer from "puppeteer";

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
}

export async function takeScreenshot(props: TakeScreenshotProps) {
    const {
        html,
        pageWidth = 800,
        pageHeight = 600,
        selector = "body",
    } = props;

    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: pageWidth, height: pageHeight });
    await page.setContent(html);
    const elementHandle = await page.$(selector);

    if (elementHandle) {
        const screenShot = await elementHandle!.screenshot();
        await page.close();

        return screenShot;
    }

    await page.close();
}
