const puppeteer = require("puppeteer");

module.exports = async function () {
    const browser = await puppeteer.launch({
        headless: false,
        args: [`--window-size=${800},${600}`, `--no-sandbox`],
    });

    process.env.__BROWSER_wsEndpoint__ = browser.wsEndpoint();
};

