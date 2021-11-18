import React from "react";
import useStyles from "./style";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
const Post = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1637166139615-267340341fff?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="mypic"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5">
            This is first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            dicta, libero minus quis omnis modi illum quisquam quo reprehenderit
            temporibus!
          </Typography>
        </CardContent>
      </Card>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </>
  );
};

export default Post;
