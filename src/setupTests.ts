import { registerAllureImageSnapshot } from "jest-allure-image-snapshot";
import "jest-allure/dist/setup";

registerAllureImageSnapshot({
    // we should store screenshots in different directories
    customSnapshotsDir: process.env.CI && !process.env.FORCE_LOCAL_ENV
        ? "__image_snapshots__/ci"
        : "__image_snapshots__/local",
});

const minutes = 10;
jest.setTimeout(minutes * 60 * 1000);

