import React from "react";
import { takeScreenshot } from "../../utils/testUtils";
import { BottomBar, BottomBarItems } from "./BottomBar";
import { render } from "@testing-library/react";

const noop = () => undefined;

describe("BottomBar", () => {
    it("Should look good [hotdog]", async () => {
        render(<BottomBar activeItem={BottomBarItems.HotDog} onClick={noop} />);
        const screenShot = await takeScreenshot();

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Should look good [Burger]", async () => {
        render(<BottomBar activeItem={BottomBarItems.Gyros} onClick={noop} />);
        const screenShot = await takeScreenshot();

        expect(screenShot).toMatchImageSnapshot();
    });

    it("Should look good [Taco]", async () => {
        render(<BottomBar activeItem={BottomBarItems.Taco} onClick={noop} />);
        const screenShot = await takeScreenshot();

        expect(screenShot).toMatchImageSnapshot();
    });
});
