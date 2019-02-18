import React from "react";
import { takeScreenshot } from "../../utils/testUtils";
import ReactDOMServer from "react-dom/server";
import { TopBar } from "./TopBar";

describe("TopBar", () => {

    it("Should look good", async () => {
        const screenShot = await takeScreenshot({
            html: ReactDOMServer.renderToStaticMarkup(<TopBar title={"HotDog Burger Taco"}/>),
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    // [...Array(100).fill(1)].forEach((v, i) => {
    //     it("[NOTE it's just a performance check]" + i, async () => {
    //         const screenShot = await takeScreenshot({
    //             html: ReactDOMServer.renderToStaticMarkup(<TopBar title={"Test " + i}/>),
    //         });
    //
    //         expect(screenShot).toMatchImageSnapshot();
    //     })
    // })
});
