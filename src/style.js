import { makeStyles } from "@mui/styles";
import theme from './theme'



const useStyles = makeStyles(() => ({
    rigth:{
        [theme.breakpoints.down("sm")]:{
            display:'none'
        }
    }

}))

export default useStyles;