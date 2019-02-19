# How to set up a pipeline with visual unit tests for your application

[![CircleCI](https://circleci.com/gh/zaqqaz/visual-unit-tests/tree/master.svg?style=svg)](https://circleci.com/gh/zaqqaz/visual-unit-tests/tree/master)

### [Presentation slides](https://denis.by/visual-tests/)
<img width="450" src="https://user-images.githubusercontent.com/2823336/53030012-b808a080-3472-11e9-953c-a9c225e44e0b.png">

>During this talk we’ll discuss why we bet on visual unit tests. On a real example we’ll discover how to implement such tests for *React* application with *Jest* and *Puppeteer*, we’ll meet *Allure report* with Jest and in the end set up the full pipeline with *CircleCi* and GitHub to run our own visual tests on each pull request. Also we’ll consider performance and some tricky parts.

**Report example:**

<img width="450" alt="Visual unit tests allure report" src="https://user-images.githubusercontent.com/2823336/52945569-b0fe6700-337a-11e9-95e1-6ac624ef018b.png">

Example project with Typescript/React.

**Features:**
 - Nice reports with [jest-allure](https://github.com/zaqqaz/jest-allure)
 - Screenshots tests with [puppeteer](https://github.com/GoogleChrome/puppeteer) & [jest-allure-image-snapshot](https://github.com/zaqqaz/jest-allure-image-snapshot)

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
