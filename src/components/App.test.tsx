import React from "react";
import App from "./App";
import ReactDOMServer from "react-dom/server";
import { takeScreenshotFromAWS } from "../utils/testUtils";

describe("App", () => {
    it("Screenshot of the app", async () => {
        const html = ReactDOMServer.renderToStaticMarkup(<App/>);
        const screenShot = await takeScreenshotFromAWS({ html: html });

        expect(screenShot).toMatchImageSnapshot();
    });
});
