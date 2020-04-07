import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Agregar from "./agregar";

function Home() {
  const [carreras, setCarreras] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCarreras = async () => {
    const response = await fetch(
      "https://crud-carreras-api.herokuapp.com/api/v1/carreras"
    );

    const carreras = await response.json();

    setCarreras(carreras);
    setLoading(false);
  };

  useEffect(() => {
    getCarreras();
  }, []);

  if (loading) {
    return <div className="container"></div>;
  } else {
    return (
      <div className="content">
        <header>
          <h1 className="title">Lista de carreras</h1>
        </header>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {carreras.map(({ id, nombre }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{nombre}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Router>
          <div className="nav">
            <nav className="content-nav">
              <ul>
                <li>
                  <Link to="/agregar" className="link">
                    Agregar
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/agregar">
                <Agregar />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Home;
