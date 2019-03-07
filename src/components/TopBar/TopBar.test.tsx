import React from "react";
import { takeScreenshot } from "../../utils/testUtils";
import ReactDOMServer from "react-dom/server";
import { TopBar } from "./TopBar";

describe("TopBar", () => {

    it("Should look good", async () => {
        const screenShot = await takeScreenshot({
            html: ReactDOMServer.renderToStaticMarkup(<TopBar/>),
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});
