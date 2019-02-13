import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

const { registerAllureImageSnapshot } = require("jest-allure-image-snapshot");
require("jest-allure/dist/setup");

configure({ adapter: new Adapter() });
registerAllureImageSnapshot({
    // we should store screenshots in different directories
    customSnapshotsDir: process.env.isCI
        ? "__image_snapshots__/ci"
        : "__image_snapshots__/local",
});

const minutes = 10;
jest.setTimeout(minutes * 60 * 1000);

export default undefined;
