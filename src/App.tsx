import React from "react";
import "./App.css";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Goals from "./Layout/Goals/Goals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Goals" component={Goals} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
