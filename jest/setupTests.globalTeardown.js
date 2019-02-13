const puppeteer = require("puppeteer");

module.exports = async function () {
    const browser = await puppeteer.connect({
        browserWSEndpoint: process.env.__BROWSER_wsEndpoint__,
    });

    await browser.close();
};
