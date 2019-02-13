import { mount } from "enzyme";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { takeScreenshot } from "../utils/testUtils";

describe("App", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('make a picture', async () => {
        const screenShot = await takeScreenshot({
            html: mount(<App/>).html(),
        });

        expect(screenShot).toMatchImageSnapshot();
    })
});
