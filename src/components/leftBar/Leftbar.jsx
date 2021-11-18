import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Bookmark, Home, Person, TabletMac } from "@material-ui/icons";

const Leftbar = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container} >
        <div className={classes.item}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
          <Person className={classes.icon} />
          <Typography className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
          <TabletMac className={classes.icon} />
          <Typography className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
          <Bookmark className={classes.icon} />
          <Typography className={classes.text}>Bookmark</Typography>
        </div>
        
      </Container>
    </>
  );
};

export default Leftbar;
