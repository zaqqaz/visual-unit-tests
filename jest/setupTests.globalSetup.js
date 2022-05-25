const puppeteer = require("puppeteer");
module.exports = async function () {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            // Required for Docker version of Puppeteer
            "--no-sandbox",
            "--disable-setuid-sandbox",
            // This will write shared memory files into /tmp instead of /dev/shm,
            // because Docker’s default for /dev/shm is 64MB
            "--disable-dev-shm-usage",
        ],
    });

    process.env.__BROWSER_wsEndpoint__ = browser.wsEndpoint();
};
