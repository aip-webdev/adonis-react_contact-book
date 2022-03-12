import {makeStyles} from "@mui/styles";
import theme from "../../../../styles/main-theme";

const useStyles = makeStyles({
    box: {
        padding: '1em',
        [theme.breakpoints.up('md')]: {
            padding: '1em 1em 0 1em',
        },
    },
    tabPanel: {
        flex: '1 1 auto',
    }
})

export default useStyles;
