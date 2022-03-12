import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/main-theme";

const useStyles = makeStyles({
    box: {
        backgroundColor: colors.mainSecond,
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 65px)',
        flexGrow: '1',
        '& a': {
            textDecoration: "none",
            color: 'rgba(18, 69, 89, 0.8)'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        '&::-webkit-scrollbar': {
            paddingRight: '10px',
            width: '7px',
            height: '4px',
            zIndex: 100,
            backgroundColor: colors.mainSecond06,
        },

        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.4)',
            backgroundColor: colors.mainSecond08,
        },

        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.4)',
            backgroundColor: colors.mainSecond06,
        },

        '&::-webkit-scrollbar-thumb:hover': {
            borderRadius: '3px',
            backgroundColor: colors.mainFirst
        },
    },
    closeTabButton: {
        top: '50%',
        color: '#124559 !important',
        right: '-4%',
        // @ts-ignore
        position: 'absolute !important',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent !important',
        [theme.breakpoints.up('md')]: {
            right: '0%',
        },
    },
    tabs: {
        borderRight: 1,
        borderColor: colors.mainFirst,
        minHeight: '60px !important',
        padding: '0.5em 1em',
        [theme.breakpoints.up('md')]: {
            minWidth: '180px',
            maxWidth: '180px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '230px',
            maxWidth: '260px',
        },
        [theme.breakpoints.up('xl')]: {
            minWidth: '260px',
            maxWidth: '260px',
        },
        '& .Mui-selected': {
            color: `${colors.mainFirst} !important`,
            borderColor: `${colors.mainFirst} !important`,
        },
        '& .MuiTabs-indicator': {
            backgroundColor: colors.mainFirst06
        },
        '& .MuiButtonBase-root': {
            color: `${colors.mainFirst} !important`,
            fontWeight: '700 !important',
            fontSize: ' 1rem !important',
            lineHeight: '1.5 !important',
            display: 'inline-flex',
            flexDirection: 'row',
            '& .MuiOutlinedInput-root': {
                opacity: '1',
                color: `${colors.mainSecond08} !important`,
                backgroundColor: `transparent !important`,
            },

        }
    },
    tab: {
        position: 'relative'
    }
})

export default useStyles;
