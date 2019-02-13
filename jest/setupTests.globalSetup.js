const puppeteer = require("puppeteer");
const fs = require("fs");
const glob = require("glob");

module.exports = async function () {
    const globalCss = await loadCss();
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

    process.env.globalCss = globalCss;
    process.env.__BROWSER_wsEndpoint__ = browser.wsEndpoint();
};

async function transpileCss(filePath) {
    return fs.readFileSync(filePath, "utf8");
}

async function loadCss() {
    const cssPaths = [
        "./src/**/*.css",
    ];

    const cssFiles = cssPaths.reduce((arr, path) => ([...arr, ...glob.sync(path)]), []);
    const css = await Promise.all(cssFiles.map(transpileCss));
    return css.join("\n");
}
