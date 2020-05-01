import React from "react";
import EPERdemicNavBar from "../components/eperdemicNavBar/eperdemicNavBar";
import Home from "./screens/home/home";
import Vectores from "./screens/vectores/vectores";
import Ubicaciones from "./screens/ubicacion/ubicaciones";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <EPERdemicNavBar />
      <Route exact path="/" component={Home} />
      <Route path="/vectores" component={Vectores} />
      <Route path="/ubicaciones" component={Ubicaciones} />
    </div>
  );
}

export default App;
