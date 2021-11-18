import { makeStyles } from "@mui/styles";
import { alpha } from '@mui/material/styles'
import theme from "../../theme";


const useStyles = makeStyles(() => ({

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'block'
        }
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%'
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(2)
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    searchbutton: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        }
    },
    icons: {
        alignItems: 'center',

        display: (props) => (props.open ? 'none' : 'flex')

    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))

export default useStyles;