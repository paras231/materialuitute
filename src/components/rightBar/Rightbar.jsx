import React from "react";
import useStyles from "./style";
import { Container, Typography, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
const Rightbar = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Typography>Online friends</Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Container>
    </>
  );
};

export default Rightbar;
