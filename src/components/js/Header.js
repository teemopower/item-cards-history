import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Header.css";
import { Main } from "./Main";
import { Chair } from "./Chair";

export class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="header-container">
          <nav>
            <Link to="/">Home</Link> | <Link to="/Chair">Chairs</Link>
          </nav>

          <Route exact path="/" component={Main} />
          <Route path="/Chair" component={Chair} />
        </div>
      </Router>
    );
  }
}
