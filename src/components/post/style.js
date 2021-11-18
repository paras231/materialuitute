import { makeStyles } from "@mui/styles";

import theme from "../../theme";

const useStyles = makeStyles(() => ({
  card: {

    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
   [ theme.breakpoints.down('sm')]:{
     height:150
   }
  },
}));

export default useStyles;
