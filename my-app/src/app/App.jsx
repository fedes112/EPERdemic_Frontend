import React from "react";
import EPERdemicNavBar from "../components/eperdemicNavBar/eperdemicNavBar";
import Home from "./screens/home/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <EPERdemicNavBar />
      <Home />
    </div>
  );
}

export default App;
