import React from "react";
import App from "./App";
import { takeScreenshot } from "../utils/testUtils";
import { mount } from "enzyme";

const deviceDimensions = {
    pageWidth: 375,
    pageHeight: 667,
};

describe("App", () => {
    it("Screenshot of the whole app [hotDog]", async () => {
        const app = mount(<App/>);
        const screenShot = await takeScreenshot({
            ...deviceDimensions,
            html: app.html(),
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Screenshot of the whole app [Burger]", async () => {
        const app = mount(<App/>);
        app.find(`[data-button="Burger"]`).simulate('click');

        const screenShot = await takeScreenshot({
            ...deviceDimensions,
            html: app.html(),
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Screenshot of the whole app [Taco]", async () => {
        const app = mount(<App/>);
        app.find(`[data-button="Taco"]`).simulate('click');

        const screenShot = await takeScreenshot({
            ...deviceDimensions,
            html: app.html(),
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});
