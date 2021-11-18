import React from "react";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftBar/Leftbar";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightBar/Rightbar";
import Add from "./components/add/Add";
import { Grid } from "@material-ui/core";
import useStyles from "./style";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
};
export default App;
