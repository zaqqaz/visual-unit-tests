import React from "react";
import { takeScreenshot } from "../../utils/testUtils";
import { TopBar } from "./TopBar";
import { render } from "@testing-library/react";

describe("TopBar", () => {
    it("Should look good", async () => {
        render(<TopBar title={"HotDog Burger Taco"}/>);
        const screenShot = await takeScreenshot();
        expect(screenShot).toMatchImageSnapshot();
    });
});
