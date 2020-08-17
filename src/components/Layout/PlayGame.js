import React from "react";
import { Grid } from "@material-ui/core";

const PlayGame = (iframe) => {
  return (
    <Grid container justify={"center"} spacing={3}>
      <div
        id="divPlayGame"
        style={{ margin: "auto", paddingBottom: "10px" }}
        dangerouslySetInnerHTML={{ __html: iframe.iframe }}
      ></div>
    </Grid>
  );
};

export default PlayGame;
