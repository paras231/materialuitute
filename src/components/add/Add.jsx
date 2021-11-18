import React, { useState } from "react";
import useStyles from "./style";
import {
  Button,
  Tooltip,
  Fab,
  Modal,
  Container,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Add as AddIcon } from "@material-ui/icons";

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField label="Title" size="small" style={{ width: "100%" }} />
            </div>
            <div className={classes.item}>
              <TextField
                defaultValue="tell about yourself"
                multiline
                rows={4}
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="everybody"
                  label="everybody"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="my friends"
                  label="my friends"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="nobody"
                  label="nobody"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="custom"
                  label="custom(premium)"
                  control={<Radio size="small" />}
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={()=>setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is success message
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
