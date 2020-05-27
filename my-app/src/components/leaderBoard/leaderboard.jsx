import React from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import UbicacionesLeaderboard from "./ubicacion/ubicacionesLeaderboard";
import EspeciesLeaderboard from "./especiesLideres/especiesLeaderboard";
const Leaderboard = () => {
  return (
    <Card className="m-2 shadow">
      <Card.Body>
        <Tabs
          style={{ paddingBottom: "12px", paddingLeft: "10px" }}
          defaultActiveKey="especiesLideres"
        >
          <Tab eventKey="especiesLideres" title="Mis especies lideres">
            <EspeciesLeaderboard />
          </Tab>
          <Tab eventKey="ubicaciones" title="Ubicaciones">
            <UbicacionesLeaderboard />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default Leaderboard;
