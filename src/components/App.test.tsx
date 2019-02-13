import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { takeScreenshot } from "../utils/testUtils";
import ReactDOMServer from "react-dom/server";

describe("App", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('make a picture :)', async () => {
        const screenShot = await takeScreenshot({
            html: ReactDOMServer.renderToStaticMarkup(<App/>),
        });

        expect(screenShot).toMatchImageSnapshot();
    })
});
