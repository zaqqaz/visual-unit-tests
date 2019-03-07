import React from "react";
import App from "./App";
import { takeScreenshot } from "../utils/testUtils";
import { mount } from "enzyme";

const deviceDimensions = {
    pageWidth: 1440,
    pageHeight: 4189,
};

describe("App", () => {
    it("Screenshot of the whole app", async () => {
        const app = mount(<App/>);
        const screenShot = await takeScreenshot({
            ...deviceDimensions,
            html: app.html(),
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});
