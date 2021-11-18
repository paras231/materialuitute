import { makeStyles } from "@mui/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  container: {
    position:'sticky',
    top:0,
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid pink",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
      fontWeight:500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
