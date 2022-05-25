import React from "react";
import { App } from "./App";
import { takeScreenshot } from "../utils/testUtils";
import { fireEvent, render } from "@testing-library/react";

const deviceDimensions = {
    pageWidth: 375,
    pageHeight: 667,
};

describe("App", () => {
    it("Screenshot of the whole app [hotDog]", async () => {
        render(<App />);

        const screenShot = await takeScreenshot({
            ...deviceDimensions,
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Screenshot of the whole app [Burger]", async () => {
        const { container } = render(<App />);
        const burgerButton = container.querySelector(`[data-button="Burger"]`)!;
        fireEvent.click(burgerButton);

        const screenShot = await takeScreenshot({
            ...deviceDimensions,
        });

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Screenshot of the whole app [Taco]", async () => {
        const { container } = render(<App />);
        const tacoButton = container.querySelector(`[data-button="Taco"]`)!;
        fireEvent.click(tacoButton);

        const screenShot = await takeScreenshot({
            ...deviceDimensions,
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});
