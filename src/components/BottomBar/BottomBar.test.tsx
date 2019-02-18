import React from "react";
import { takeScreenshot } from "../../utils/testUtils";
import ReactDOMServer from "react-dom/server";
import { BottomBar, BottomBarItems } from "./BottomBar";

const noop = () => undefined;

describe("BottomBar", () => {

    it("Should look good [hotdog]", async () => {
        const screenShot = await takeScreenshot({
            html: ReactDOMServer.renderToStaticMarkup(<BottomBar activeItem={BottomBarItems.HotDog} onClick={noop}/>),
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Should look good [Burger]", async () => {
        const screenShot = await takeScreenshot({
            html: ReactDOMServer.renderToStaticMarkup(<BottomBar activeItem={BottomBarItems.Burger} onClick={noop}/>),
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Should look good [Taco]", async () => {
        const screenShot = await takeScreenshot({
            html: ReactDOMServer.renderToStaticMarkup(<BottomBar activeItem={BottomBarItems.Taco} onClick={noop}/>),
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});
