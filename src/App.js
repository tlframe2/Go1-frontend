import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventsOverview from './components/EventsOverview';
import EventDetails from './components/EventDetails';
import EventContextProvider from "./context/EventContext";

import './App.css';

/** 
 * Root of application. Handles routing.
 * @route "/" - displays filter and event previews
 * @route "/details" - displays details of clicked on event
 */
function App() {
  return (
    <EventContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={EventsOverview} />
          <Route path="/details" exact component={EventDetails} />
        </Switch>
      </Router>
    </EventContextProvider>
  );
}

export default App;
