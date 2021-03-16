import React from "react";
import "./App.css";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Goals from "./Layout/Goals/Goals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import Footer from "./Components/Footer/Footer";
import Investment from "./Layout/Investment/Investment";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TopNavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Goals" component={Goals} />
            <Route exact path="/Investment" component={Investment} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
