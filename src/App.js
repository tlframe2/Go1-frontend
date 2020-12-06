import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventsOverview from './components/EventsOverview';
import EventDetails from './components/EventDetails';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EventsOverview} />
        <Route path="/details" exact component={EventDetails} />
      </Switch>
    </Router>
  );
}

export default App;
