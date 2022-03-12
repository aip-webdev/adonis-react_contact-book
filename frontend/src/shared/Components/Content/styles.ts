import {makeStyles} from "@mui/styles"
import theme from "../../../styles/main-theme";

const useStyles = makeStyles({
    content: {
        minWidth: ' 320px',
        maxWidth: '639px',
        paddingTop: '65px',
        height: '100vh',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            minWidth: '640px',
            maxWidth: '999px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '1000px',
            maxWidth: '1399px',
        },
        [theme.breakpoints.up('xl')]: {
            minWidth: '1400px',
            maxWidth: '1400px',
        }
    }
})

export default useStyles;

