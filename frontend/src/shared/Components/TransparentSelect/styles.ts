import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/main-theme";

const useStyles = makeStyles({
    formControl: {
        color: colors.mainFirst,
        flex: '1 0 auto',
        // @ts-ignore
        position: 'absolute !important',
        bottom: '0',
        [theme.breakpoints.up('md')]:{
            bottom: 'initial',
            // @ts-ignore
            position: 'relative !important',
        },
        '& #demo-simple-select-standard-label': {
            color: colors.mainFirst,
        },
    }
})

export default useStyles;
