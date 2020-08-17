import React from "react";
import Games from "./Games";
import { Container } from "@material-ui/core";

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth="lg" className="container">
        <Games />
      </Container>
    </div>
  );
};

export default Dashboard;
