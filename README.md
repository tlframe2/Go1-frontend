# Events Frontend

UI made with React

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How it works

Application fetches events from backend API running on localhost:5000 (this can be changed but url in EventsOverview.js will need to be updated).
Displays all events as a list with a preview of information. Bar at top of page can be used to filter events by title and by date. Clicking on event title redirects to detail page for event.
