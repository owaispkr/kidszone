import React from "react";
import { Grid } from "@material-ui/core";
import logo from "./../../assets/img/kidZone_logo.png";

function Nav() {
  return (
    <div>
      <Grid container direction="row">
        <img
          src={logo}
          alt="kidszone"
          style={{ width: "300px", margin: "auto", display: "block" }}
        />
      </Grid>
    </div>
  );
}

export default Nav;
