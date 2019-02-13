const puppeteer = require("puppeteer");
const fs = require("fs");
const glob = require("glob");

module.exports = async function () {
    const globalCss = await loadCss();
    const browser = await puppeteer.launch({
        headless: true,
        args: [`--no-sandbox`],
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
