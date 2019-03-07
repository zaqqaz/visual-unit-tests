import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { registerAllureImageSnapshot } from "jest-allure-image-snapshot";
import "jest-allure/dist/setup";

configure({ adapter: new Adapter() });

registerAllureImageSnapshot({
    // we should store screenshots in different directories
    customSnapshotsDir: process.env.CI
        ? "__image_snapshots__/ci"
        : "__image_snapshots__/local",
});

const minutes = 10;
jest.setTimeout(minutes * 60 * 1000);

export default undefined;
