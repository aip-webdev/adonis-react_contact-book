import {makeStyles} from "@mui/styles";
import colors from "../../../../utils/enums/colors";
import theme from "../../../../styles/main-theme";

const useStyles = makeStyles({
    addingTab: {
        [theme.breakpoints.down('md')]: {
            maxWidth: '170px !important'
        },
        padding: '0 29px !important',
        color: `${colors.mainFirst} !important`,
        opacity: '1 !important',
    },
    tabInput: {
        width: 'auto',
        minWidth: '130px !important',
        maxWidth: '200px !important',

        [theme.breakpoints.up('md')]: {
            minWidth: '100%',
            maxWidth: '100%',
            opacity: '1',
        },
        '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            color: colors.mainFirst,
            border: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '1rem',
            height: '1rem',
            lineHeight: '1.5',
            padding: '0',
            minHeight: '48px !important',
        },
        '& input:-internal-autofill-selected': {
            color: `${colors.mainSecond08} !important`,
            backgroundColor: `transparent !important`,
        },
        '& input[placeholder]': {
            color: `${colors.mainFirst} !important`,
            backgroundColor: `transparent !important`,
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '1rem',
            lineHeight: '1.5',
            textAlign: 'center',
        }
    }
})

export default useStyles;
