import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Index from "./index";

export default (props) => {
  return (
    <div>
      <h1>Hola aqui puedes agregar</h1>
      <Router>
        <div className="nav">
          <nav className="content-nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Cerrar
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route>
              <Redirect to="/">
                <Index />
              </Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
