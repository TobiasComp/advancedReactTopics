import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forms from "./components/forms";
import { ConsumeContext } from "./components/consumeContext";
import { ContextProvider } from "./components/contextComponent";
import Navbar from "./components/navbar";
import { ConsumeContext2 } from "./components/consumerContext2";

export default function App() {
  return (
    <ContextProvider>
      <Navbar></Navbar>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/forms">Forms</Link>
              </li>
              <li>
                <Link to="/context">Context</Link>
              </li>
              <li>
                <Link to="/context2">Context 2</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/forms">
              <Forms />
            </Route>

            <Route path="/context">
              <ConsumeContext />
            </Route>
            <Route path="/context2">
              <ConsumeContext2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}
