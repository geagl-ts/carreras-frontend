import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [carreras, setCarreras] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCarreras = async () => {
    const response = await fetch(
      "https://crud-carreras-api.herokuapp.com/api/v1/carreras",
      {
        mode: "no-cors",
      }
    );

    console.log(response);

    //setCarreras(carreras);
    setLoading(false);
  };

  useEffect(() => {
    getCarreras();
  }, []);

  if (loading) {
    return <div className="container"></div>;
  } else {
    return (
      <div className="container">
        <div className="content">
          <table className="table">
            <thead>
              <th>ID</th>
              <th>Nombre</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ing. Sistemas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
