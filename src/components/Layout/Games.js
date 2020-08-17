import React, { useState } from "react";
import games_iframe from "./../../data/games_iframe";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import PlayGame from "./PlayGame";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    width: 345,
  },
  media: {
    height: 300,
    widht: 500,
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

const Games = () => {
  const [gameiframe, setgameiframe] = useState("");

  const onButtonClick = (iframe) => {
    setgameiframe(iframe);
    const elmntToView = document.getElementById("divPlayGame");

    setTimeout(function () {
      elmntToView.scrollIntoView();
    }, 1000);
  };

  const classes = useStyles();
  return (
    <div>
      <PlayGame iframe={gameiframe} />
      <PlayGame />
      <Grid container justify={"center"} spacing={3}>
        {games_iframe.map((data, key) => {
          return (
            <Grid key={key} item xs={12} sm={12} lg={3}>
              <div>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={data.imgsrc}
                      title={data.name}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.title}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => onButtonClick(data.iframe)}
                    >
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Games;
